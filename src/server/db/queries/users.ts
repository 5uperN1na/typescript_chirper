import { Query } from '../index';

const all = () => Query('SELECT id, users.name FROM users');
 
 
export default{
   all
}