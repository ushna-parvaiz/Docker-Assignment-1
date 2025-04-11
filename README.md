C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker stop newapp 
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker rm newapp
newapp
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker run -d --name newapp -p 3001:3000 hello-docker
304ac7b6e8854b16c0b98f79d89c0cba8dd879c6f36b90aae1e36c3e0375f09e
docker: Error response from daemon: driver failed programming external connectivity on endpoint newapp (3a35836371bb82b57161ed14e2e1a6c552fe643f21f2524aaff52ff17b72e0b1): Bind for 0.0.0.0:3001 failed: port is already allocated.
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker run -d --name newapp -p 3002:3000 hello-docker
docker: Error response from daemon: Conflict. The container name "/newapp" is already in use by container "304ac7b6e8854b16c0b98f79d89c0cba8dd879c6f36b90aae1e36c3e0375f09e". You have to remove (or rename) that container to be able to reuse that name.
See 'docker run --help'.
newapp
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker ps -a
CONTAINER ID   IMAGE                       COMMAND                  CREATED             STATUS                         PORTS
                            NAMES
d490bad5f663   hello-docker                "docker-entrypoint.s…"   6 minutes ago       Up 2 minutes                   0.0.0.0:3001->3000/tcp 
                            newapp-new
a4b26c7c0cd2   4ee7eade3e25                "docker-entrypoint.s…"   42 minutes ago      Up 38 minutes                  0.0.0.0:3000->3000/tcp 
                            myapp-new
0f678b1ef23e   part2-web                   "docker-entrypoint.s…"   About an hour ago   Exited (0) About an hour ago
                            part2-web-1
68cb8e1679b4   mongo                       "docker-entrypoint.s…"   About an hour ago   Exited (0) About an hour ago
                            part2-mongo-1
759d60c0e1e0   ubuntu                      "/bin/bash"              33 hours ago        Exited (255) 3 hours ago
                            great_wozniak
551d61163f73   jenkins/jenkins:lts-jdk17   "/usr/bin/tini -- /u…"   36 hours ago        Up 3 hours                     0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   reverent_babbage
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker run -d --name newapp -p 3002:3000 hello-docker
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker ps
CONTAINER ID   IMAGE                       COMMAND                  CREATED          STATUS          PORTS
          NAMES
          newapp
d490bad5f663   hello-docker                "docker-entrypoint.s…"   7 minutes ago    Up 3 minutes    0.0.0.0:3001->3000/tcp
          newapp-new
a4b26c7c0cd2   4ee7eade3e25                "docker-entrypoint.s…"   42 minutes ago   Up 38 minutes   0.0.0.0:3000->3000/tcp
          myapp-new
551d61163f73   jenkins/jenkins:lts-jdk17   "/usr/bin/tini -- /u…"   36 hours ago     Up 3 hours      0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   reverent_babbage
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker build -t hello-docker .
[+] Building 2.7s (10/10) FINISHED                                                                                       docker:desktop-linux 
 => [internal] load build definition from Dockerfile                                                                                     0.0s 
 => [internal] load metadata for docker.io/library/node:14                                                                               2.2s 
 => [auth] library/node:pull token for registry-1.docker.io                                                                              0.0s 
 => [internal] load .dockerignore                                                                                                        0.0s 
 => => transferring context: 2B                                                                                                          0.0s 
 => [1/4] FROM docker.io/library/node:14@sha256:a158d3b9b4e3fa813fa6c8c590b8f0a860e015ad4e59bbce5744d2f6fd8461aa                         0.0s 
 => => transferring context: 120B                                                                                                        0.0s 
 => CACHED [2/4] WORKDIR /app                                                                                                            0.0s 
 => CACHED [4/4] RUN npm install                                                                                                         0.0s 
 => exporting to image                                                                                                                   0.1s 
 => => exporting layers                                                                                                                  0.0s 
 => => writing image sha256:34250fd5266f4a56a49efede1811264006c1efd6bb9d41d6b71cb1dcf3cea4cf                                             0.0s 
 => => naming to docker.io/library/hello-docker                                                                                          0.0s 
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker run -d --name newapp -p 3002:3000 hello-docker
docker: Error response from daemon: Conflict. The container name "/newapp" is already in use by container "38cd62d131400ec69280e3cfb85ec9577fbfb8b38387793681fb86c464173ad7". You have to remove (or rename) that container to be able to reuse that name.
See 'docker run --help'.
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker ps
CONTAINER ID   IMAGE                       COMMAND                  CREATED          STATUS          PORTS
          NAMES
38cd62d13140   hello-docker                "docker-entrypoint.s…"   2 minutes ago    Up 2 minutes    0.0.0.0:3002->3000/tcp
          newapp
d490bad5f663   hello-docker                "docker-entrypoint.s…"   9 minutes ago    Up 5 minutes    0.0.0.0:3001->3000/tcp
          newapp-new
a4b26c7c0cd2   4ee7eade3e25                "docker-entrypoint.s…"   44 minutes ago   Up 40 minutes   0.0.0.0:3000->3000/tcp
          myapp-new
551d61163f73   jenkins/jenkins:lts-jdk17   "/usr/bin/tini -- /u…"   36 hours ago     Up 3 hours      0.0.0.0:8080->8080/tcp, 0.0.0.0:50000->50000/tcp   reverent_babbage
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker logs newapp

> docker-hello@1.0.0 start /app
> node app.js

Server running on port 3000
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker inspect myapp
[]
Error: No such object: myapp
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker inspect newapp
[
    {
        "Id": "38cd62d131400ec69280e3cfb85ec9577fbfb8b38387793681fb86c464173ad7",
        "Created": "2025-04-11T17:47:17.640192674Z",
        "Path": "docker-entrypoint.sh",
        "Args": [
            "npm",
            "start"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 4345,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2025-04-11T17:47:18.040006498Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:34250fd5266f4a56a49efede1811264006c1efd6bb9d41d6b71cb1dcf3cea4cf",
        "ResolvConfPath": "/var/lib/docker/containers/38cd62d131400ec69280e3cfb85ec9577fbfb8b38387793681fb86c464173ad7/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/38cd62d131400ec69280e3cfb85ec9577fbfb8b38387793681fb86c464173ad7/hostname",
        "HostsPath": "/var/lib/docker/containers/38cd62d131400ec69280e3cfb85ec9577fbfb8b38387793681fb86c464173ad7/hosts",
        "LogPath": "/var/lib/docker/containers/38cd62d131400ec69280e3cfb85ec9577fbfb8b38387793681fb86c464173ad7/38cd62d131400ec69280e3cfb85ec9577fbfb8b38387793681fb86c464173ad7-json.log",
        "Name": "/newapp",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "bridge",
            "PortBindings": {
                "3000/tcp": [
                    {
                        "HostIp": "",
                        "HostPort": "3002"
                    }
                ]
            },
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "ConsoleSize": [
                31,
                142
            ],
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": [],
            "BlkioDeviceWriteBps": [],
            "BlkioDeviceReadIOps": [],
            "BlkioDeviceWriteIOps": [],
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": [],
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware",
                "/sys/devices/virtual/powercap"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/8bfd78fddccaeb72978c842eeb6d670d772a56048389a6832f0f8abb04a0d525-init/diff:/var/lib/docker/overlay2/3a5nad4yze8010xpp29dhz64d/diff:/var/lib/docker/overlay2/u6mmqis1scwvwy8vr02frb7gw/diff:/var/lib/docker/overlay2/hxd03rekdjry1ctelhmb0kk3z/diff:/var/lib/docker/overlay2/391430c31179d408c181058e6010c8911f281e322a200c651b8e30e7a0c476e8/diff:/var/lib/docker/overlay2/41433dc23a75dfd75fadd9cac2944dc3c26b8d5b992c424c691eb4078c5d340c/diff:/var/lib/docker/overlay2/616fcbcf49d77ea3533333fdfd9f0fd40e0e94d18acbb2a5003ad6b1c2732063/diff:/var/lib/docker/overlay2/50cd61a4fa266b92562828b092911f74cc626194a7967ab1cf2e277f3de3158b/diff:/var/lib/docker/overlay2/1b7aed4e3631ef3035af159780d526bd3a344d2002c561f823fc9695e2916059/diff:/var/lib/docker/overlay2/6dc8ee894865389b7901180acfb0c4c9c97463598935a927391556ea771fd1b7/diff:/var/lib/docker/overlay2/6c794d3afdcc8598737a365d1e02f11d5aa06ed714ea23527932fde14c887d40/diff:/var/lib/docker/overlay2/a69da2d91a96ee3ffca7d13b91cc6bce176f21a1100c3537ad560121ea58611a/diff:/var/lib/docker/overlay2/521b59d3bf74bb74a04e4fdd511301fddcd36760fb64885f8ba248c65eb05e7c/diff",
                "MergedDir": "/var/lib/docker/overlay2/8bfd78fddccaeb72978c842eeb6d670d772a56048389a6832f0f8abb04a0d525/merged",
                "UpperDir": "/var/lib/docker/overlay2/8bfd78fddccaeb72978c842eeb6d670d772a56048389a6832f0f8abb04a0d525/diff",
                "WorkDir": "/var/lib/docker/overlay2/8bfd78fddccaeb72978c842eeb6d670d772a56048389a6832f0f8abb04a0d525/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "38cd62d13140",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "3000/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NODE_VERSION=14.21.3",
                "YARN_VERSION=1.22.19"
            ],
            "Cmd": [
                "npm",
                "start"
            ],
            "Image": "hello-docker",
            "Volumes": null,
            "WorkingDir": "/app",
            "Entrypoint": [
                "docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {}
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "a1bbd5485e0caf84cb720f3a3d08d5e4b3c2067937102dbd63822199a12ab0e3",
            "SandboxKey": "/var/run/docker/netns/a1bbd5485e0c",
            "Ports": {
                "3000/tcp": [
                    {
                        "HostIp": "0.0.0.0",
                        "HostPort": "3002"
                    }
                ]
            },
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "SecondaryIPAddresses": null,
            "EndpointID": "f4bb431631e3740edbe4e177886daa925053dbd61d78cdf19abdcc73731a8c96",
            "Gateway": "172.17.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.17.0.5",
            "IPv6Gateway": "",
            "Networks": {
CONTAINER ID   NAME               CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O   PIDS
CONTAINER ID   NAME               CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O   PIDS
38cd62d13140   newapp             0.00%     23.29MiB / 7.587GiB   0.30%     3.53kB / 1.42kB   0B / 0B     19
d490bad5f663   newapp-new         0.00%     22.18MiB / 7.587GiB   0.29%     830B / 0B         0B / 0B     19
a4b26c7c0cd2   myapp-new          0.00%     20.47MiB / 7.587GiB   0.26%     1.73kB / 704B     0B / 0B     19
551d61163f73   reverent_babbage   0.13%     631.8MiB / 7.587GiB   8.13%     3.51MB / 85.2kB   0B / 0B     49

context canceled
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker start newapp
newapp
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker pause newapp
newapp
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker unpause newapp
newapp
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker rename newapp newapp-new
Error response from daemon: Error when allocating new name: Conflict. The container name "/newapp-new" is already in use by container "d490bad5f66387f0b37c55ef66cf2c59d550c1bba62bf86b0643507a1f720673". You have to remove (or rename) that container to be able to reuse that nama62bf86b0643507a1f720673". You have to remove (or rename) that container to be able to reuse that name.
Error: failed to rename container named newapp
PS C:\Users\B I S M I L L A H\OneDrive\Desktop\Docker-Assignment\part1> docker wait newapp-new
