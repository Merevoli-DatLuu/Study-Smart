build:
	docker build -t sst_backend .

up:
	docker-compose -p study_smart up

down:
	docker-compose -p study_smart down

restart:
	docker-compose -p study_smart down
	docker-compose -p study_smart up

init:
	docker exec -it sst_backend pipenv run python3 manage.py migrate
	docker exec -it sst_backend pipenv run python3 manage.py init_super_user
	
migrate:
	docker exec -it sst_backend pipenv run python3 manage.py migrate

package=
install:
	docker exec -it sst_backend pipenv install $(package)