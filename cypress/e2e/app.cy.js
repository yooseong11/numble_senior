/// <reference types="cypress" />

describe('"/" index page', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:5173/')
	})

	it('첫 페이지가 나타난다.', () => {
		cy.get('.title').should('have.text', '당신의 인생 2막을 응원하는평생 금융파트너')
	})
	
	it('첫 화면을 클릭하면 다음 페이지로 넘어간다', () => {
		cy.get('#screen').click();
		cy.location('pathname').should('include', '/skipOrStart');
	})
})

describe('"/skipOrStart" page', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:5173/skipOrStart')
	})

	it('시작 버튼을 클릭하면 온보딩 페이지로 넘어간다', () => {
		cy.get('.startButton').click();
		cy.location('pathname').should('include', '/onboarding/1');
	})

	it('스킵 버튼을 클릭하면 메인 페이지로 넘어간다', () => {
		cy.get('.skipButton').click();
		cy.location('pathname').should('include', '/main');
	})
})

describe('"/onboarding" page', () => {
	beforeEach(() => {
		cy.visit('http://127.0.0.1:5173/onboarding/1');
	})

	it('다음 버튼을 누르면 다음 순서의 온보딩으로 넘어간다.', () => {
		cy.get('.nextButton').click();
		cy.location('pathname').should('include', '/onboarding/2');
	})

	it('온보딩 전체 페이지는 6페이지입니다.', () => {
		cy.get('.pagenation').find('li').should('have.length', 6);
	})

	it('온보딩 페이지가 끝나면 메인 페이지로 이동합니다.', () => {
		for (let i = 0; i < 6; i++) {
			cy.get('.nextButton').click();
		}
		cy.location('pathname').should('include', '/main');
	})
})