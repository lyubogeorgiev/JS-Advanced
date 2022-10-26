function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let result = '';

  switch (namingConvention){
      case 'Camel Case':
          result = convertToCamelCase(text);
          break;
      case 'Pascal Case':
          result = convertToPascalCase(text);
          break;
      default:
          result = 'Error!';
          break;
  }
  document.getElementById('result').textContent = result;

  function convertToCamelCase(input){
      let result = convertToPascalCase(input);

      let [firstLetter, ...rest] = result;

      firstLetter = firstLetter.toLowerCase();

      return firstLetter + rest.join('');
  }

  function convertToPascalCase(input){
      let textArray = input.split(' ');

      let result = '';

      for (const word of textArray) {
          let [firstLetter, ...rest] = word;

          result += firstLetter.toUpperCase() + rest.map(a => a.toLowerCase()).join('');
      }

      return result;
  }
}