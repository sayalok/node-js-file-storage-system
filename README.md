<h1>Create a Backent system for bbn project</h1>

to run this project please go through the following instruction

<ul>
	<li> git clone https://github.com/iota-it-tech/bbn-backend.git</li>
	<li> cd bbn-backend</li>
	<li> then create .env file from env and set proper crdentials</li>
	<li> run `npm install` to install all necessary package </li>
	<li> Then run npm dev</li>
	<li> Run `npm run-script migrate` to migrate all tables</li>
	<li> Run `npm run-script migrate-revert` to migrate all tables</li>
	<li> Run `npm run-script seed` to migrate all tables</li>
	<li> Run `npm run-script seed-revert` to migrate all tables</li>
</ul>

<h2>Few Essential Commands</h2>

## for use sequlize globally

npm install sequelize-cli -g

## create migration and model file

sequelize model:create --name name --attributes field_name:type

## to migrate

sequelize db:migrate

## create seeder file

sequelize seed:create --name filename

## run seeder

sequelize db:seed:all
