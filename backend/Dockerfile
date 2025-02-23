# backend/Dockerfile

FROM python:3.13-slim

WORKDIR /app/backend/

# Устанавливаем переменные окружения
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

# Выполняем миграции и загружаем данные
# RUN python manage.py migrate
# RUN python manage.py loaddata backend/db.json

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
# CMD ["/app/backend/scripts/entrypoint.sh"]