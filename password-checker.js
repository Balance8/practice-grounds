function masker(input) {
  console.log(
    input
      .split('')
      .map(x => '*')
      .join('')
  );
}

masker('test');
