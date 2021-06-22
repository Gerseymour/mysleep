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
  cy.get('[data-testid=habit-input]').focus().type('hello world')
  const submit = cy.contains(/submit/i)
  submit.click()
  // cy.get('[data-testid=submit-button]').click()
  // console.log('input cy test',input)
  // cy.get(/home/i)
  
})
// cy.get('[data-cy="nav-add-habit"]').click();