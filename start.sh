#! /bin/bash
docker build -f Dockerfile -t jonasflorencio/dialogflow-sheets --target developer .

docker run --name test -v $(pwd):/home/app -p 8080:8080 jonasflorencio/dialogflow-sheets

docker rm -f test