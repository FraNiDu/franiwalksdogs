FROM java:8-alpine

COPY target/uberjar/franiwalksdogs.jar /franiwalksdogs/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/franiwalksdogs/app.jar"]
