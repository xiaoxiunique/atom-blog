FROM nginx
COPY ./.vuepress/dist/ /usr/share/nginx/html/
RUN ["nginx"]