FROM nginx:1.15.2

# WORKDIR /usr/share/nginx/html

EXPOSE 80

COPY ./dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
