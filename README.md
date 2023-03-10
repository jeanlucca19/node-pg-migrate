<h2>💻 Overview </h2>

An Object Relational Mapping (ORM), as TypeORM, Prisma and Sequelize, are technologies that let you query and manipulate data usually from a database using an object-oriented paradigm.

But currently we are having the disadvantage of the **low performance to execute more complex queries using the ORM**.

With that in mind, we bring the **`node-pg-migrate`** library as an alternative. Which is **Database Migration Management** created exclusively for **postgres.**.
<br>

## Scope:

Based on the [library documentation](https://salsita.github.io/node-pg-migrate/#/), we created a simple migration of the tables: user, posts and points. And an application to perform aggregation using time scale db.

#### 🛠 Tecnologias

**As seguintes** ferramentas foram usadas na construção do projeto:

- [Nest.js]
- [TypeScript]
- [Node]
- [Git]
- [Express]
- [Time-Scale-Db]
- [DataBase]

<hr>

## How to use

Create the following .env using your database credentials:

```
DATABASE_URL=postgresql://database-user:password@localhost:5432/database-name
```

Run the following command to install all the dependencies:

```
yarn install || npm install
```

Run the following command in order to up the migration:

```
yarn migrate up || npm run migrate up
```

##### Autores

---

 <table>
	<tr>  
		<td align="center">
			<a href="https://github.com/JaquelineVictal">
				<img
					width="100px"
					height="auto"
					src="https://github.com/JaquelineVictal.png"
					alt="Jaqueline Victal"
				/>
				<br />
				<sub>
					<b>Jaqueline<br>Victal</b>
				</sub>
			</a>
		</td>
		<td align="center">
			<a href="https://github.com/jeanlucca19/node-pg-migrate">
				<img
					width="100px"
					height="auto"
					src="https://avatars.githubusercontent.com/u/83885005?v=4"
					alt="Jean Lucca"
				/>
				<br />
				<sub>
					<b>Jean<br>Lucca</b>
				</sub>
			</a>
		</td>
</table>
