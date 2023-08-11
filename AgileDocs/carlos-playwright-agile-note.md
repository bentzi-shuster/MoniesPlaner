- # Agile Development #agile
	- ## Initiative Template
		-
		  ```markdown
		  # **Initiative Title: [Enter Initiative Title]**
		  
		  ## 📌 **Introduction**
		  
		  [Enter a brief introduction that provides context and purpose for this Initiative.]
		  
		  ---
		  
		  ## 📌 **Initiative Objective**
		  
		  **Objective**: [Enter the objective or high-level goal of this Initiative.]
		  
		  ### **Initiative Scope**:
		  
		  - [List key Epics that are part of this Initiative]
		  - [List other relevant information about the scope]
		  
		  ---
		  ```
	- ## Epic w/ user stories, & Acceptance Criteria Template
		-
		  ```markdown
		  # **Epic Title: [Enter Epic Title]**
		  
		  ## 📌 **Introduction**
		  
		  [Enter a brief introduction that sets the context and purpose of this Epic.]
		  
		  ---
		  
		  ## 📌 **Epic Objective**
		  
		  **Objective**: [Enter the objective or goal of this Epic.]
		  
		  ### **Acceptance Criteria for Epic**:
		  
		  1. **Given** [context or initial state],
		     **When** [specific action is taken],
		     **Then** [expected outcome should occur].
		  
		  2. **Given** [context or initial state],
		     **When** [specific action is taken],
		     **Then** [expected outcome should occur].
		  
		  3. ...
		  
		  ---
		  
		  ## 🎯 **User Story 1: [Enter User Story Title]**
		  
		  **Objective**: [Enter the objective of this User Story.]
		  
		  ### **Example User Story**:
		  
		  *As a [type of user], I want [an action or feature], so that [benefit/value].*
		  
		  ### **Acceptance Criteria**:
		  
		  1. **Given** [context or initial state],
		     **When** [specific action is taken],
		     **Then** [expected outcome should occur].
		  
		  2. **Given** [context or initial state],
		     **When** [specific action is taken],
		     **Then** [expected outcome should occur].
		  
		  3. ...
		  
		  ---
		  
		  ## 🎯 **User Story 2: [Enter User Story Title]**
		  
		  **Objective**: [Enter the objective of this User Story.]
		  
		  ### **Example User Story**:
		  
		  *As a [type of user], I want [an action or feature], so that [benefit/value].*
		  
		  ### **Acceptance Criteria**:
		  
		  1. **Given** [context or initial state],
		     **When** [specific action is taken],
		     **Then** [expected outcome should occur].
		  
		  2. **Given** [context or initial state],
		     **When** [specific action is taken],
		     **Then** [expected outcome should occur].
		  
		  3. ...
		  
		  ---
		  
		  [Repeat the structure for additional User Stories if needed]
		  
		  ---
		  
		  **Example**:
		  [Provide any additional information, notes, or examples relevant to the Epic.]
		  
		  ```
- # User stories #agile
	- **User stories** (in Agile philosophy): reflect core principles of creativity, collaboration, and end-user focus
	- ## What are User Stories?
		- Describe software functionality from end-user perspective
		- Doesn't describe feature itself, focuses on user's need, leaving room for creativity
		- User story format: `"As a <type of user>, I want to <perform some action> so that <some reason or benefit>."`
		- ### User Story Format
			-
			  ```markdown
			  --
			  ## User Story Template
			  
			  **Title**: *Brief title for the user story.*
			  
			  **As a** [type of user],  
			  **I want** [an action or feature],  
			  **So that** [benefit/value].
			  
			  **Context**: *(Optional)* Detailed context or background information.
			  
			  ### Acceptance Criteria:
			  
			  1. **Given** [a certain context or initial state],  
			     **When** [a specific action is taken],  
			     **Then** [a set of observable outcomes should occur].
			     
			  2. **Given** [another context or initial state],  
			     **When** [a different action is taken],  
			     **Then** [a different set of observable outcomes should occur].
			  
			  --
			  ```
	- ## User Stories in Agile
		- Fundamental part of Agile frameworks
		- They emphasize user needs, collaboration, and value delivery
		- Core elements of the backlog in Scrum and Kanban methodologies
		- Compared to use cases:
			- User stories: Brief, outline user intent, general development direction.
			- Use cases: Structured, formal, detailed, functional requirements.
	- ## User Stories vs. Epics Vs. Tasks
		- Common breakdown:
			- *epics* - greater body of work
			- *user stories* - specific functionality
			- *tasks* - segments within a story
		- Epics can encompass multiple user stories, and *initiatives* describe high-level objectives
	- ## How to write User Stories
		- **The 3 C's:**
			- *Card* - tangible representation, i.e., can be written on a card
			- *Conversation* - inspire discussions to develop a common understanding
			- *Confirmation* - completion must be confirmed through acceptance criteria
		- ### Best Practices
			- Guidelines for writing effective user stories:
				- Keep it simple, concise
				- Avoid ambiguity; be clear
				- Prioritize user perspective
				- Start with epics; break into specific stories
				- Define user personas; tailor stories
				- Encourage collaboration, feedback
				- Regularly refine user stories
			- Ensure they following *INVEST* criteria
				- **Independent**: each one shouldn't depend on others so that they can be done in any sequence and not affect one another if changed
				- **Negotiable**: there shouldn't be a rigid workflow but rather a room for conversation and adjustments
				- **Valuable**: each user story must bring value to the end user
				- **Estimable**: the team should be able to estimate the effort required to complete the user story
				- **Small**: each user story shouldn't take longer than one sprint to be completed
				- **Testable**: it's possible to define at least one acceptance criterion to confirm the proper completion of the user story
			- **Add Acceptance Criteria**
		- ## *Technical* User Stories #agile
			- *Technical User Story* - a type of user story that focuses on the non-functional support of a system
				- Typically involves implementing back-end functionality, database tables supporting a new function or extending an existing service layer
				- The purpose is to provide context and guidance to the development team regarding the technical tasks and requirements needed to support the desired functionality as described in the user story itself
	- ## How to Work with User Stories:
		- *User story lifecycle* - user stories must be managed throughout the project
		- *Responsibility for Writing* - Product owner or manager typically writes user stories; *__collaboration is essential__*
		- Business Analysts (or devops) aid in converting consumer needs to user stories
		- *When to write* - epics are usually written early, followed by continuous development of user stories
		- User stories are not strict requirements; they evolve, gain detail, and may need to be broken down.
	- ## User Story Mapping
		- **User Story Mapping**: arranging user stories in a narrative to depict user interactions with the product
		- Story map organizes backlog items in two dimensions: user journey and priority
		- Supports product vision, backlog grooming, and identifies missing items
	- ## User Story Estimation
		- **Story Point Estimation**: Measures effort for completing user stories
		- Planning poker involves voting with cards containing relative measurement units
		- Story points presented to customers and user for measuring team velocity
	- ## User Story Weakness and Potential Pitfalls
		- Lack of understanding of actual user needs risks project failure
		- Lack of context can result in vague or incomplete user stories, meant to foster discussion
		- Non-functional requirements must be omittied
		- User stories lack technical guidelines; developers need to interpret and implement creatively
		- User stories enhance development by focusing on user needs, and fostering creativity and collaboration, but have limitations
	- ## Acceptance Criteria #agile
		- ### The Role of Acceptance Criteria
			- **Acceptance Criteria (AC)**: conditions that software must meet to be accepted by users, customers, or systems
				- They define feature behavior from the end-users perspective
				- AC helps avoid unexpected results, ensuring stakeholder and user satisfaction
				- AC should be defined before development to meet client needs and expectations
		- ### Purpose of Acceptance Criteria
			- **Detailed Scope**: AC defines user story boundaries and precise functionality details
			  logseq.order-list-type:: number
			- **Negative Scenarios**: AC describes system reactions to negative or unexpected user behavior
			  logseq.order-list-type:: number
			- **Communication**: AC synchronizes client and development team visions for common understanding
			  logseq.order-list-type:: number
			- **Acceptance Testing**: Basis for user story acceptance testing, with explicit pass/fail scenarios
			  logseq.order-list-type:: number
			- **Feature Evaluation**: Specify development tasks and assist in task estimation
			  logseq.order-list-type:: number
		- ### Acceptance Criteria Types and Structures
			- **Scenario-Oriented Format (Given/When/Then)**: Illustrates criteria using a scenario sequence:
				- *Given*: Precondition
				- *When*: User action
				- *Then*: Expected outcome
				- *And*: Continuation of preceding statements
			- **Rule-Oriented Format**: Describe system behavior rules, allowing specific scenaries:
				- Criteria are composed as a bullet list
				- Useful for complex functionality, system-level descriptions, or specific audience needs
				- Criteria are composed as a set of rules for system behavior, which can then generate specific scenarios
			- ### Example of *Scenario-Oriented Acceptance Criteria*:
				- **Recovering Password User Story**:
				- **Scenario**: Forgot password
				- **Given**: User navigates to login page
					- **When**: User selects "forgot password" option
					- **And**: Enters a valid email
					- **Then**: System sends recovery link to email
					- **Given**: User receives link via email
					- **When**: User navigates through link
					- **Then**: System allows setting new password
		- ## Best Practices for Writing Acceptance Criteria
			- Document criteria before development starts for capturing customer needs
			- Avoid overly narrow or specific criteria; convey intent rather than final solution
			- Keep criteria achievable to deliver reasonable functionality
			- Ensure criteria are measurable and not overly broad
			- Use plain English and avoid technical details for clear understanding
			- Reach consensus among stakeholders and team members on criteria understanding
			- Write testable criteria for effective verification
			- User active voice and simple, concise sentences for clarity
- # Playwright #playwright
	- **Playwright**
		- Playwright is an open-source End-to-End (E2E) automation framework supporting TypeScript, JavaScript, Python, and C#
		- It offers a high-level API for interacting with web browsers efficiently and reliably
		- Playwright is gaining popularity rapidly, with thousands of stars, forks, and users on GitHub
	- **Key Features of Playwright**:
		- Works directly in WebSocket (DevTools Protocol for Chrome) for fast browser interactions
		- Support for TypeScript, a superset of JavaScript
		- TypeScript offers features like static typing, interfaces, and other OOP concepts
		- TypeScript compiles plain JavaScript for compatibility with browsers
	- ### TypeScript
		- **TypeScript** is a superset of *JavaScript*, adding features like static typing, interfaces, and object-oriented programming (OOP) capabilities
		- Typescript compiles to JavaScript before execution, enabling better code organization and error checking
	- Incorporating **playwright** can significantly improve code quality by ensuring features and functionalities work as intended in different environments
	- Plays an essential role in modern DevOps and Agile practices, where continuous integration and continuous delivery necessitate automated testing
	- ## Why use Playwright?
		- **Cross-Browser Testing**: Test across multiple browsers (Chromium, Firefox, and WebKit)
		- **Reliability**: Eliminate flaky tests with auto-waiting for elemenets
		- **Rich Automation**: Interact with web elements, intercept network requests, and more
	- ## Getting Started with Playwright Testing
		- ### Installation
			- Run `npm install @playwright/test` to install
			- Run `npm init playwright@latest` in an existing project or `npm init playwright@latest new-project` for a new project
			- Alternatively, use the VS Code extension for Playwright to create and manage projects
		- ### Installed Components
			- After installation, you'll have a `package.json` file with Playwright added
			- A `playwright.config.ts` file for configuration, including browser choices
			- A `Tests` folder containing an example file for a TODO app
		- ### Generating Tests with Codegen
			- Codegen records actions to generate tests
			- Run `npm playwright codegen` to open a browser window and test code window as you interact with the site, tests are generated in real time
		- ### Copying tests to your Editor
			- After recording, copy the generated test code into a new test file in your project's Tests folder
			- Codegen support multiple languages; select from the dropdown menu to change the code language
		- ### Running Tests
			- Use VS Code extensions to run tests by clicking the green triangle next to the test line
			- Alternatively, run test via the terminal with `npx playwright test`
			- For headed testing (visual execution), use `npx playwright test --headed`
	- ## How to Compile TypeScript Code
		- To compile TS code for Playwright testing, create a `tsconfig.json` file in your project and add the following configuration:
		  logseq.order-list-type:: number
			-
			  ```ts
			  {
			      "compilerOptions": {
			          "target": "ESNext",
			          "module": "commonjs",
			          "moduleResolution": "Node",
			          "sourceMap": true,
			          "outDir": "../tests-out",
			      }
			  }
			  ```
		- In your `package.json`, add a script for compilation:
		  logseq.order-list-type:: number
			-
			  ```json
			  "scripts": {
			      "pretest": "tsc --incremental -p tests/tsconfig.json",
			      "test": "playwright test -c tests-out"
			  }
			  ```
		- The `pretest` script compiles the TypeScript code using `tsc` and generates the output files in the `tests-out` directory. The `test` script runs the Playwright tests using the compiled code
		  logseq.order-list-type:: number
	- ## How to Write Your First Playwright
		- Create a new test file (`.spec.ts`) inside the `tests` folder
		  logseq.order-list-type:: number
		- Import necessary modules:
		  logseq.order-list-type:: number
			-
			  ```ts
			  import { test, expect } from '@playwright/test';
			  ```
		- Start writing your test using the `test` function provided by Playwright. Access the `page` fixture to interact with the browser:
		  logseq.order-list-type:: number
			-
			  ```ts
			  test('Should add item to cart', async({page}) => {
			  ```
		- Navigate to a website using `page.goto()`:
		  logseq.order-list-type:: number
			-
			  ```ts
			  test('Should add item to cart', async({page}) => {
			  ```
		- Use locators (selectors) to interact with elements on the page. For example, hover over a menu item:
		  logseq.order-list-type:: number
			-
			  ```ts
			  await page.locator("span.title", { hasText: 'Mega Menu' }).hover();
			  ```
		- Click on an element to add an item to the cart:
		  logseq.order-list-type:: number
			-
			  ```ts
			  await page.locator("div.carousel-item.active > img[title='HTC Touch HD']").click();
			  await page.locator("#container button[title='Add to Cart']").click();
			  ```
		- Perform assertions using the `expect` function to verify that the item is added to the cart:
		  logseq.order-list-type:: number
			-
			  ```ts
			  await page.locator("a.btn.btn-primary.btn-block", { hasText: 'View Cart' }).click();
			  await expect(page.locator("td.text-left", { hasText: 'HTC Touch HD' })).toBeVisible();
			  await expect(page.locator("div[class$='flex-nowrap'] > input")).toHaveValue("1");
			  ```
		- The Full testcode:
		  logseq.order-list-type:: number
			-
			  ```ts
			  test('Should add item to cart', async({page}) => {
			      await page.goto('https://ecommerce-playground.lambdatest.io/');
			      await page.locator("span.title", { hasText: 'Mega Menu' }).hover();
			      await page.locator("a[title=Desktop]").click();
			      await page.locator("div.carousel-item.active > img[title='HTC Touch HD']").click();
			      await page.locator("#container button[title='Add to Cart']").click();
			      await page.locator("a.btn.btn-primary.btn-block", { hasText: 'View Cart' }).click();
			      await expect(page.locator("td.text-left", { hasText: 'HTC Touch HD' })).toBeVisible();
			      await expect(page.locator("div[class$='flex-nowrap'] > input")).toHaveValue("1");
			  });
			  ```
	- ## How to Run Your Playwright Test
		- There are two ways
		- ### Using VS Code extension:
			- If you have the Playwright Test for VS Code extension installed, you can find it on the left-hand side of VS Code.
			  logseq.order-list-type:: number
			- Click on the extension icon to open the explorer, where you will see your test files.
			  logseq.order-list-type:: number
			- Right-click on a test file and choose to run or debug it.
			  logseq.order-list-type:: number
		- ### Using terminal
			- Open a terminal in your project root directory
			  logseq.order-list-type:: number
			- Run the following command to execute a specific test file (replace `typescript.spec.ts` with your test file's name): `npx playwright test typescript.spec.ts`
			  logseq.order-list-type:: number
			- If you have only one test file or want to run all of them, you can omit specifying the file name
			- Executing these commands will run your Playwright tests, and the results will be displayed in the terminal
	- ## Best Practices While Performing Playwright End-To-End Testing
		- Use *Playwrgiht's Auto-Wait functionality*:
			- Playwright automatically waits for elements to become stable and clickable, eliminating the need for explicit waits in your code
		- ### API Feature
			- Playwright offers an API feature that allows you to perform actions via HTTP requests instead of UI interactions
				- Can significantly improve test execution time
			- To use this feature, inspect the API calls that correspond to the UI interactions using the browser's DevTools Network Tab
			- Replicate the API call using the `request.post()` method provided by Playwright within the text context
			- This approach bypasses UI steps and can lead to faster test execution times
		- ### Debugging
			- Debugging Playwright tests is facilitated by the Playwright VS Code extension
			- Set breakpoints in your test code and use the debugging tools to step through your code, inspect variables, and review the state of the browser
			- Playwright's Debug Tools show elements you interact with in real-time, making it easier to spot locator issues
			- Use the Trace Viewer feature by configuring it in the `playwright.config.ts` file
			- The Trace View generates a detailed report of test steps, snapshots, console output, and network activity, helping you diagnose test failures effectively
	- # Acceptance Criteria to Playwright
		- **Understand the Acceptance Criteria**: Make sure you fully understand the user story's acceptance criteria before starting to write the Playwright test. Break down each criterion into specific user actions and expected outcomes.
		- **Create a Test File**: Start by creating a new file specifically for the Playwright tests related to that user story.
		- **Import Playwright**: Import Playwright's necessary modules at the beginning of your test file.
		- **Write Test Blocks**: For each acceptance criterion, create a separate test block. Use the test function provided by Playwright to define the test.
		- **Navigate to the Relevant Page**: Begin each test by navigating to the page where the action takes place. You can use Playwright's page.goto() method to do this.
		- **Simulate User Actions**: Inside each test block, simulate the user actions described in the acceptance criteria using Playwright's API. This might include clicking buttons, filling out forms, etc.
		- **Assert Expected Outcomes**: After simulating the actions, use Playwright's API to assert the expected outcomes. This could involve verifying that specific elements are visible, text is present, etc.
		- **Run and Validate Tests**: Run the Playwright tests using a testing framework like Jest. Make sure the tests pass as expected.
		- ## Example:
			- When I visit the site on a desktop, the navbar should collapse into a mobile-friendly hamburger menu when I resize the window.
			-
			  ```ts
			  const { test, expect } = require('@playwright/test');
			  
			  test('Responsive Navbar Test', async ({ page }) => {
			    // Navigate to the homepage
			    await page.goto('https://yourwebsite.com');
			  
			    // Simulate a desktop screen size
			    await page.setViewportSize({ width: 1200, height: 800 });
			  
			    // Verify the presence of a full-width navbar
			    const navbarDesktop = await page.$('.navbar.desktop');
			    expect(navbarDesktop).not.toBeNull();
			  
			    // Simulate a smaller screen size
			    await page.setViewportSize({ width: 768, height: 800 });
			  
			    // Verify the presence of a hamburger menu
			    const hamburgerMenu = await page.$('.navbar.mobile .hamburger-menu');
			    expect(hamburgerMenu).not.toBeNull();
			  });
			  ```