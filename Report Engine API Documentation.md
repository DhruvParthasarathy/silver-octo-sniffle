# Report Engine API Documentation

The Report Engine API provides functionality to generate, manage, and interact with reports for different aspects of the application. This document outlines the available endpoints and their explanations.

**ReportableEntity**:
- A reportable entity is any entity for which a report can be generated. The first one that comes to mind is a deployment / intervention. This can later be extended to other aspects of the application.

## Endpoints

## 1. Get available report types for a ReportableEntity

**Endpoint**: GET /report-engine/{entityId}/report-types

**Description**: Returns the available report types that can be generated for a given ReportableEntity.

**Request Parameters:**

- {entityId} (required): The unique identifier of the ReportableEntity.

**Response:**
- Status: 200 OK
- Content: JSON array containing the available report types.

## 2. Get available report versions for a report type

**Endpoint**: GET /report-engine/report-types/{reportTypeId}/versions

**Description**: Returns the available versions of a specific report type.

**Request Parameters:**
- {reportTypeId} (required): The identifier of the report type.

**Response:**
- Status: 200 OK
- Content: JSON array containing the available report versions.

## 3. Get input parameters data structure for a report

**Endpoint**: GET /report-engine/{entityId}/report-types/{reportTypeId}/versions/{versionId}/input-parameters

**Description**: Returns the input parameters data structure required to generate a specific report for a given ReportableEntity.

**Request Parameters:**
- {entityId} (required): The unique identifier of the ReportableEntity.
- {reportTypeId} (required): The identifier of the report type.
- {versionId} (required): The identifier of the report version.

**Response:**
- Status: 200 OK
- Content: JSON object containing the input parameters data structure.

## 4. Get generated reports for a ReportableEntity

**Endpoint**: GET /report-engine/{entityId}/reports

**Description**: Returns the reports that have already been generated for a specific ReportableEntity.

**Request Parameters:**
- {entityId} (required): The unique identifier of the ReportableEntity.

**Response:**
- Status: 200 OK
- Content: JSON array containing the generated reports.

## 5. Re-run a report

**Endpoint**: POST /report-engine/{entityId}/reports/{reportId}/rerun

**Description**: Initiates the re-generation of a specific report for a given ReportableEntity.

**Request Parameters:**
- {entityId} (required): The unique identifier of the ReportableEntity.
- {reportId} (required): The identifier of the report to be re-run.

**Response:**
- Status: 200 OK
- Content: JSON object indicating the status of the re-generation process.

## 6. Delete a report

**Endpoint**: DELETE /report-engine/{entityId}/reports/{reportId}

**Description**: Deletes a specific report for a given ReportableEntity.

**Request Parameters:**
- {entityId} (required): The unique identifier of the ReportableEntity.
- {reportId} (required): The identifier of the report to be deleted.

**Response:**
- Status: 204 No Content

## 7. Generate a report

**Endpoint**: POST /report-engine/{entityId}/report-types/{reportTypeId}/versions/{versionId}/generate

**Description**: Initiates the generation of a specific report for a given ReportableEntity with the provided input parameters.

**Request Parameters:**
- {entityId} (required): The unique identifier of the ReportableEntity.
- {reportTypeId} (required): The identifier of the report type.
- {versionId} (required): The identifier of the report version.

**Request Body:**
- JSON object containing the user input parameters based on the structure obtained from the "Get input parameters data structure for a report" API.

**Response:**
- Status: 202 Accepted
- Content: JSON object indicating the status of the report generation process.

## 8. Get report details

**Endpoint**: GET /report-engine/{entityId}/reports/{reportId}

**Description**: Retrieves the details and metadata of a specific report for a given ReportableEntity.

**Request Parameters:**
- {entityId} (required): The unique identifier of the ReportableEntity.
- {reportId} (required): The identifier of the report.

**Response:**
- Status: 200 OK
- Content: JSON object containing the report details and metadata.

## 9. Download a report

**Endpoint**: GET /report-engine/{entityId}/reports/{reportId}/download

**Description**: Downloads the generated report file for a given ReportableEntity.

**Request Parameters:**
- {entityId} (required): The unique identifier of the ReportableEntity.
- {reportId} (required): The identifier of the report.

**Response:**
- Status: 200 OK
- Content: The report file for download.

## 10. Get report status

**Endpoint**: GET /report-engine/{entityId}/reports/{reportId}/status

**Description**: Retrieves the status of a specific report generation process for a given ReportableEntity.

**Request Parameters:**
- {entityId} (required): The unique identifier of the ReportableEntity.
- {reportId} (required): The identifier of the report.

**Response:**
- Status: 200 OK
- Content: JSON object containing the status information of the report generation process.

## 11. Cancel report generation

**Endpoint**: DELETE /report-engine/{entityId}/reports/{reportId}/generation

**Description**: Cancels the ongoing generation of a specific report for a given ReportableEntity.

**Request Parameters:**
- {entityId} (required): The unique identifier of the ReportableEntity.
- {reportId} (required): The identifier of the report.

**Response:**
- Status: 204 No Content

## 12. Update report metadata

**Endpoint**: PUT /report-engine/{entityId}/reports/{reportId}/metadata

**Description**: Updates the metadata or properties associated with a specific report for a given ReportableEntity.

**Request Parameters:**
- {entityId} (required): The unique identifier of the ReportableEntity.
- {reportId} (required): The identifier of the report.

**Request Body:**
- JSON object containing the updated metadata properties.

**Response:**
- Status: 200 OK
- Content: JSON object indicating the updated metadata properties of the report.
