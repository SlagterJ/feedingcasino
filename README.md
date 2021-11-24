# Feeding Casino

Ons project voor de examen training van meneer van Laar.

## Zie Documentatie

[Klik Hier](DOCUMENTATION.md)

## Installeer Project

Clone:

```sh
git clone https://github.com/SlagterJ/feedingcasino.git feedingcasino
```

Laravel:

Configure the database connection in the .env file.
If there is no .env file rename .env.example file to .env.

```sh
cd server
composer install
php artisan migrate
php artisan passport:install
php artisan serve
```

React:

```sh
cd client
yarn install
```

## Credits

- [Jordy Slagter](https://github.com/SlagterJ)
- [Joost Raemakers](https://github.com/JRaemakers)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
