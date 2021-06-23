/// <reference types='cypress' />

it('works contains', () => {
  cy.visit('/');
  // cy.get('[data-test-id="title"]', {withinSubject: null}).debug();
  cy.get('[data-testid=add-button]');
})


it('can go to a page from home and return ', () => {
  cy.visit('/');
  cy.contains(/add habits/i).click().wait(400)
  cy.contains(/home/i).click()
  
})

it.only('can go to a page from home and return ', () => {
  cy.visit('/');
  const input = cy.contains(/add habits/i)
  input.click().wait(400)
  cy.get('[data-testid=habit-input]').focus().type('hello world').wait(1000)
  let submit = cy.get('[data-testid=submit]')
  // console.log(submit)
  // cy.get(/home/i)
  submit.click({force:true})
  cy.get('[data-testid=habit-input]').focus().type('submit').wait(1000)
  submit = cy.get('[data-testid=submit]')

  submit.click({force:true})
  
  let home = cy.get('[data-testid=Home]')
  home.click()
  
  let checkIndicators = cy.contains(/check indicators/i)
  checkIndicators.click()
  // cy.get('[data-testid=submit-button]').click()
  // console.log('input cy test',input)
  
})
// cy.get('[data-cy="nav-add-habit"]').click();