function whatIsInAName(arr, obj) {
  return arr.filter(item => isObjIncludesAllSourceProps(item, obj))
}

function isObjIncludesAllSourceProps(arrObj, srcObj) {
  for (const key of Object.keys(srcObj)) {
    console.log('key: ', key)
    if (arrObj[key] !== srcObj[key]) {
      return false;
    }
  }

  return true;
}

