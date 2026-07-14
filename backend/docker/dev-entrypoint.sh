#!/usr/bin/env sh
set -eu

# Compile once so Spring Boot starts from the current bind-mounted sources.
mvn -q -DskipTests compile

# DevTools watches target/classes. Recompile whenever Java/resources change;
# the running application then performs a fast context restart automatically.
(
  while inotifywait -qq -r \
    -e close_write,create,delete,move \
    --exclude '(^|/)(target|\.git)(/|$)' \
    src; do
    # Editors may emit several filesystem events for one save. A short debounce
    # avoids launching redundant Maven compilations.
    sleep 0.15
    mvn -q -DskipTests compile || true
  done
) &

exec mvn -q -DskipTests spring-boot:run
