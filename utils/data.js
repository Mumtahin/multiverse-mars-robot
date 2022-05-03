const removeNonAlphanumericChars = (data) => data.replace(/[^0-9A-Z]+/gi,"");

module.exports = {
  removeNonAlphanumericChars
}