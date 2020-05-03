# [Deno](https://deno.land/) REST Api for [Arduiono Meteostation](https://github.com/dNepovim/meteostation-arduino)


## Run the App

```deno run --allow-env --allow-net --allow-read app.ts```

For development purpose you can run postgres database in [Docker](https://www.docker.com/):
```docker-compose up```
Then run `deno run --allow-read --allow-net createDB.ts`.

## Routes

| Route                | Description              |
| -------------------- | ------------------------ |
| POST /metrics        | add metrics record       |
