import Description from './Description';

describe('suit test entity Description', function() {
  it('if the class Description contain static method valid(), return true', function() {
    expect(Description.hasOwnProperty('valid')).toEqual(true);
  });

  it(`if send a description with less 300 character, the method
      valid() have to returned false`, function() {
    const description = `Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Phasellus risus ipsum, volutpat faucibus 
        maximus quis, luctus nec nibh. Duis ullamcorper 
        mauris in sagittis lacinia.`;
    expect(Description.valid(description)).toEqual(false);
  });

  it(`if send a description with less 300 character, the method
      valid() have to returned false`, function() {
    const description = `Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Phasellus risus ipsum, volutpat faucibus 
        maximus quis, luctus nec nibh. Duis ullamcorper 
        mauris in sagittis lacinia. Pellentesque eget tristique odio. 
        Nulla suscipit rhoncus nisl, sed ornare elit congue consequat. 
        Mauris ac sollicitudin ligula`;
    expect(Description.valid(description)).toEqual(true);
  });
});
