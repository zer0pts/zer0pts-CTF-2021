## challenge directory structure

```
/
├── category (The name doesn't matter)
│   ├── challenge (The name doesn't matter)
│   │   ├── challenge (Place the files required to build the task, which are not distributed to the competitors)
│   │   │   ├── ... 
│   │   │
│   │   ├── distfiles (The files in this directory are packed in tar.gz and it's distributed)
│   │   │   └── ...
│   │   │
│   │   ├── rawdistfiles (The files in this directory are distributed without packing)
│   │   │   └── ...
│   │   │
│   │   ├── docker-compose.yml (If you want to deploy a server for the challenge, you MUST put this file)
│   │   │
│   │   ├── solution (Place the solver of the task here)
│   │   │   ├── docker-compose.yml (A bot will automatically check the solvability during the competition)
│   │   │
│   │   └── task.json (Challenge name, description, port number, etc...)
|   |   

```


### category/challenge/task.yml

```yml
---
name: "mini blog"
id: miniblog   # optional: should match to /[a-z0-9_-]+/. if this isn't specified `name` is used as `id` too.
description: >
  I created a <a href="http://${host}:${port}/" target="_blank">minimal
  blog platform</a>. It doesn't use any complex things.
flag: KosenCTF{u_saw_th3_zip51ip_in_the_53CC0N_Beginn3r5_didn7?}
author: theoldmoon0602
tags: [web]
host: web.ctf.zer0pts.com
port: 8555
is_survey: false
```


### category/challenge/docker-compose.yml
```yml
version: "3"
services:
  miniblog: # <- name is not important
    build: ./
    ports:
      - "14000:14000"
    # please add files to docker images instead of using `volumes`
```

### category/challenge/solution/docker-compose.yml

This file will be run by: `docker-compose run solve_<id>`

```yml
version: "3"
services:
  solve_miniblog: # solve_<id> 
    build:
      context: .
```
