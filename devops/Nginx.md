[[TOC]]

## 命令

**验证配置是否正确**

```shell
nginx -t
```

**查看 Nginx 的版本号**

```shell
nginx -V
```

**启动 Nginx**：

```shell
nginx
```

**快速停止或关闭 Nginx**

```shell
nginx -s stop
```

**正常停止或关闭 Nginx**

```shell
nginx -s quit
```

**配置文件修改重装载命令**

```shell
nginx -s reload
```

## Nginx 配置语法

### root

### autoindex

开启目录文件列表

### autoindex_exact_size

显示出文件的确切大小，单位是 bytes

### charset

避免中文乱码





### 马总的 Nginx 配置

```nginx
user  www www;
worker_processes  auto;


pid        /usr/local/nginx/logs/nginx.pid;
error_log  /data/logs/nginx/nginx_error.log  crit;

worker_rlimit_nofile 51200;
events {
    worker_connections  1024;
}


http {
      include       mime.types;
                default_type  application/octet-stream;

                server_names_hash_bucket_size 128;
                client_header_buffer_size 32k;
                large_client_header_buffers 4 32k;
                client_max_body_size 512m;
                proxy_max_temp_file_size 512m;

                sendfile on;
                tcp_nopush     on;

                keepalive_timeout 60;

                tcp_nodelay on;

                fastcgi_connect_timeout 300;
                fastcgi_send_timeout 300;
                fastcgi_read_timeout 300;
                fastcgi_buffer_size 64k;
                fastcgi_buffers 4 64k;
                fastcgi_busy_buffers_size 128k;
                fastcgi_temp_file_write_size 256k;

                gzip on;
                gzip_min_length  1k;
                gzip_buffers     4 16k;
                gzip_http_version 1.0;
                gzip_comp_level 2;
                gzip_types       text/plain application/x-javascript text/css application/xml application/json;
                gzip_vary on;
                gzip_proxied        expired no-cache no-store private auth;
                gzip_disable        "MSIE [1-6]\.";

                #limit_conn_zone $binary_remote_addr zone=perip:10m;
                ##If enable limit_conn_zone,add "limit_conn perip 10;" to server section.

                server_tokens off;
                #log format

                 log_format access  "$http_x_forwarded_for|$remote_user|$time_local|$request|"
                 "$request_time|$request_length|"
                 "$status|$body_bytes_sent|$http_referer|"
                 "$http_user_agent";
server
        {
                listen 80 default;
                #listen [::]:80 default ipv6only=on;
                server_name _;
                index index.html index.htm index.php;
                root  /data/www/default;

                #error_page   404   /404.html;
                location ~ [^/]\.php(/|$)
                        {
                                # comment try_files $uri =404; to enable pathinfo
                                try_files $uri =404;
                                #fastcgi_pass  unix:/tmp/php-cgi.sock;
                                fastcgi_pass 127.0.0.1:9000;
                                fastcgi_index index.php;
                                include fastcgi.conf;
                                #include pathinfo.conf;
                        }

   #             location /nginx_status {
   #                     stub_status on;
   #                     access_log   off;
   #            }

                location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
                        {
                                expires      30d;
                        }

                location ~ .*\.(js|css)?$
                        {
                                expires      12h;
                        }

                #close slb health test
                access_log  /dev/null;
                access_log  /data/logs/nginx/access.log  access;
        }
include vhosts/*.conf;
}

```

