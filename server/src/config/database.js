const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose
  .connect('mongodb://admin:Lima9608@ds243254.mlab.com:43254/mymoney')
  .then(() => console.log('Database connected'));

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório";
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'.";
