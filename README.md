- To run the scripts, use command line

`npx wdio` or `npx wdio run ./wdio.conf.js`

- To run single file, use command

`npx wdio --spec ./test/specs/<fileName>`

- To run single file, use command

```npx wdio --spec ./test/specs/<fileName>```

- Use this command before running the script to clear the old reports

`npm run-script pretest`

- To get the reports, use command

`allure generate --clean allure-results && allure open`

---<Docker>---

Step 1: Run the docker image using command

`docker run -d -p 4447:4444 -p 7907:7900 --shm-size="2g" --name docker-chrome -e VNC_NO_PASSWORD=1 selenium/standalone-chrome`

Step 2: To see UI part, go to browser and run

`http://localhost:7907/`

- Password for host 7907 `secret`

Step 3: Run the tests by follwing command

`npx wdio run ./docker.conf.js `

- To run single file, use command

`npx wdio run ./docker.conf.js --spec ./test/specs/<fileName>`

Step 4: To stop the docker image running, use commands

`docker rm --force docker-chrome`

//[OR]

To run from shell file use command

`./runtestdocker.sh`

To run separate file using shell command, use

`./runtestdocker.sh --spec ./test/specs/<filename>`

