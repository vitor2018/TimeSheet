/*CREATE TABLE RESPONDENT*/
IF (OBJECT_ID('RESPONDENT')) > 0
BEGIN
	DROP TABLE [RESPONDENT]
END;
CREATE TABLE [dbo].[RESPONDENT](
	ID INT NOT NULL IDENTITY(1,1),
	ID_USER INT NOT NULL,
	NR_YEAR INT NOT NULL,	
	DT_CREATE DATETIME NOT NULL,
	DT_ALTER DATETIME NOT NULL
)

/*PRIMARY KEY*/
ALTER TABLE [dbo].[RESPONDENT] ADD CONSTRAINT PK_RESPONDENT PRIMARY KEY CLUSTERED ([ID] ASC)

/*FOREIGN KEY*/
ALTER TABLE [dbo].[RESPONDENT] ADD CONSTRAINT FK_RESPONDENT_USER FOREIGN KEY (ID_USER) REFERENCES [dbo].[USER] (ID)

/*INDEX*/
CREATE INDEX ix_RESPONDENT ON [dbo].[RESPONDENT](ID)