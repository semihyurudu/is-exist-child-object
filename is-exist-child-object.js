/*
* https://semih.app
* https://github.com/semihyurudu/is-exist-child-object/
* https://medium.com/@semihyurudu
* 2020/08/26
*/

function isExistChildObject(variable, path) {

  if(typeof variable === 'undefined')
    return false;

  if(!path)
    return true;

  const children = path.split('.');
  let item = children[0];

  if(typeof variable[item] === 'undefined')
    return false;

  let lastPath = path.replace(item, '');

  if(lastPath.charAt(0) === '.') {
    lastPath = lastPath.substring(1);
  }

  if(!lastPath)
    return true;

  return isExistChildObject(variable[item], lastPath);

}