# Reglas y requisitos de Bezzerwizzer

Este documento describe el comportamiento que actualmente aplica el servidor. Es la referencia para desarrollo y para cualquier cambio de interfaz o de reglas.

## Configuración de la sala

- Una sala admite de **2 a 4 jugadores** (`MIN_PLAYERS = 2`, `MAX_PLAYERS = 4`).
- El código de sala contiene 6 caracteres alfanuméricos en mayúsculas.
- Solo se puede entrar, cambiar el estado de listo e iniciar mientras la sala está en `LOBBY`.
- Todos los jugadores deben estar marcados como listos; únicamente el anfitrión puede comenzar.
- Una vez iniciada la partida no se admiten nuevas incorporaciones, aunque un participante existente puede reconectarse y solicitar el estado.

## Objetivo y puntuación

- El tablero tiene **30 casillas**. Al llegar o superar la casilla 30 se gana inmediatamente.
- Los puntos desplazan al jugador ese número de casillas. Una penalización no puede dejar una posición por debajo de 0.
- El jugador del turno que acierta gana el valor asignado a su categoría (1, 2, 3 o 4).
- Las preguntas de opción múltiple se validan contra la letra de la opción correcta; las de texto libre pasan por `AnswerValidator`.

## Categorías y orden de juego

1. Al iniciar un ciclo de categorías, cada jugador recibe 4 categorías aleatorias y únicas para esa asignación. Si no hay categorías suficientes en la base de datos, el servidor rechaza el inicio.
2. Cada jugador debe asignar exactamente una vez los valores **1, 2, 3 y 4** a sus cuatro categorías. La confirmación es obligatoria para todos.
3. El servidor ordena las categorías por valor. Se juega primero la categoría de 1 punto de todos los jugadores, después la de 2, la de 3 y finalmente la de 4.
4. El orden de los jugadores se fija al comienzo del ciclo según su posición en el tablero, de menor a mayor. En empate, se conserva el orden de la colección interna de jugadores.
5. Tras jugar las cuatro categorías de todos, el servidor entrega cuatro categorías nuevas y repone las fichas tácticas.

## Tiempos y turnos

- Cada turno abre una ventana de preparación de **10 segundos** (`PLAYING`). El jugador actual puede revelar la pregunta antes de que termine.
- Durante esa ventana todos pueden votar «Paso»; la pregunta se revela antes de tiempo solo cuando el voto es unánime.
- Al revelarse la pregunta, el jugador del turno dispone de **30 segundos** para contestar (`ANSWERING`). Si no responde, se registra como fallo.
- Si hay un rebote, cada retador que deba responder dispone de **10 segundos**. Si se agota el tiempo, se considera fallo y se prueba con el siguiente retador.
- El servidor prepara la pregunta durante la ventana táctica y evita reutilizar preguntas ya usadas en la sala. Si un ZWAP cambia la categoría, descarta esa pregunta preparada y obtiene otra de la categoría nueva.

## Fichas tácticas

Las fichas se restauran al comenzar cada nuevo ciclo de cuatro categorías: **1 ZWAP** y **2 BEZZERWIZZER** por jugador.

### ZWAP

- Solo se puede usar durante la preparación (`PLAYING`) y exclusivamente por el jugador del turno.
- Intercambia una categoría pendiente propia por una categoría pendiente de otro jugador.
- El intercambio cambia solo la categoría; cada casilla conserva su valor de puntos.
- No se pueden usar categorías ya jugadas, índices inexistentes ni una ficha si ya no quedan ZWAP.

### BEZZERWIZZER y rebotes

- Un jugador no puede retarse a sí mismo, solo puede desafiar al jugador del turno actual y solo una vez por turno.
- Puede jugarse durante la preparación o mientras responde el jugador original. No está disponible durante los rebotes.
- Los retadores se atienden por orden de activación si falla la respuesta anterior.
- Un BEZZER jugado **antes** de revelar la pregunta es un reto temprano: si el retador acierta el rebote suma **+3**; si falla, pierde **1** punto.
- Un BEZZER jugado durante la respuesta original es un reto normal: si el retador acierta el rebote suma **+1**; si falla no cambia su posición.
- Si el jugador original acierta, no hay rebotes ni puntos para los retadores.
- Los retadores tempranos pueden enviar una respuesta mientras contesta el jugador original. El servidor la guarda y la resuelve automáticamente cuando les llegue el turno de rebote.

## Estados y restricciones de protocolo

| Estado | Acción permitida principal |
| --- | --- |
| `LOBBY` | Entrar, marcar listo e iniciar (solo anfitrión) |
| `CATEGORY_ASSIGNMENT` | Asignar 1, 2, 3 y 4 una vez cada uno |
| `PLAYING` | Preparación, ZWAP, BEZZER y voto de paso |
| `ANSWERING` | Responder el jugador activo; los retadores tempranos pueden guardar su respuesta |
| `GAME_OVER` | La partida terminó al alcanzar una posición de 30 |

Los valores `BEZZERWIZZER_WINDOW`, `TURN_RESULT` y `ROUND_END` existen en el enum del protocolo, pero el flujo principal actual opera con `PLAYING`, `ANSWERING` y el reinicio inmediato de categorías. No deben usarse en una nueva interfaz como si fueran transiciones emitidas de forma estable sin revisar antes el backend.

## Notas de mantenimiento

- `currentRound` se incrementa al iniciar categorías nuevas y también después de completar la vuelta de todos los jugadores para cada valor. Por ello representa el contador técnico de vueltas, no siempre una ronda completa de cuatro categorías mostrable al usuario.
- La interfaz debe enviar el `questionId` de la pregunta activa al responder; una respuesta con un identificador distinto se rechaza.
- El servidor usa el estado autoritativo: los temporizadores del cliente son solo visuales y no deben decidir resultados.
- Al cambiar estas reglas, actualiza el componente `rules-help`, este archivo y las pruebas de `backend/src/test/java`.
