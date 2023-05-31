# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Flag to indicate whether to use internal id or custom id for displaying agents on the report.

**Acceptance criteria:**

- A flag field indicating whether to use internal or custom id for displaying agents on report is created in the Facilities table in the database
- This flag should be accessible and editable by the facilities via provided UI

**Estimated time: 6 hours**

**Implementation details:**

- Create a boolean flag "use_customer_id" in Facilities table
- Provide appropriate UI component in the Facilities view to allow editing of the flag

### Ticket 2: Add a field for saving custom id for agents into the database

**Acceptance criteria:**

- A field for custom id is created in the Agents table in the database
- This field should be accessible and editable by the facilities via provided UI
  Estimated time: 4 hours

**Implementation details:**

- Create a "custom_id" field in Agents table
- Provide appropriate UI component in the Agents view to allow editing of the field

### Ticket 3: Modify "generateReport" to use either internal or custom id for displaying agents on the report

**Acceptance criteria:**

- If the "use_customer_id" flag is True, the "generateReport" function should use custom id for displaying agents on the report
- If the "use_customer_id" flag is False, the "generateReport" function should use internal id for displaying agents on the report

**Estimated time: 2 hours**

**Implementation details:**

- Modify the "generateReport" function to detect the "use_customer_id" flag
- If flag is true, fetch the custom_id field from Agents table
- If flag is false, fetch the internal_id field from Agents table 

### Ticket 4: Testing and Bug Fixing

**Acceptance criteria:**

- All components should be tested for correct functioning
- Corner cases should be tested - All detected bugs should be fixed

**Estimated time: 4 hours**

**Implementation details:**

- Develop unit tests for "generateReport" and other components
- Perform end-to-end testing
- Debug and fix any encountered bugs when devellope getShiftsByFacility? The "getShiftsByFacility" function should already be present as part of the existing feature we are building upon. As such, it will not be necessary to create a dedicated ticket for this.
