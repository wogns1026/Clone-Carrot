DROP TABLE IF EXISTS TB_USERS;
DROP TABLE IF EXISTS TB_ITEMS;
DROP TABLE IF EXISTS TB_BUY_REVIEWS;
DROP TABLE IF EXISTS TB_BOARD;

CREATE TABLE TB_USERS (
    USER_ID         LONG NOT NULL AUTO_INCREMENT PRIMARY KEY,
    USER_NAME       VARCHAR(20),
    ADDRESS         VARCHAR(20),
    MANNER_TEMPER   INT,
    RETRADE_RATE    INT,
    REVIEW          VARCHAR(1000)
);

CREATE TABLE TB_ITEMS (
    ITEM_ID         LONG NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ITEM_TITLE      VARCHAR(50),
    SELLER_ID       LONG,
    COST            INT,
    CATEGORY        VARCHAR(20),
    STATUS          BOOLEAN,
    DESCRIPTION     VARCHAR(1000),
    VIEW_CNT        INT,
    IMAGE           VARCHAR(20),
    ITEM_REG_TIME   DATETIME
);

CREATE TABLE TB_BUY_REVIEWS (
  REVIEW_ID         LONG NOT NULL AUTO_INCREMENT PRIMARY KEY,
  USER_ID           LONG,
  SELLER_ID         LONG,
  CONTENT           VARCHAR(1000),
  REG_TIME          DATETIME
);

CREATE TABLE TB_BOARD(
    BOARD_ID        LONG NOT NULL AUTO_INCREMENT PRIMARY KEY,
    USER_ID         LONG,
    CONTENT         VARCHAR(1000),
    IMAGE           VARCHAR(20),
    VIEW_CNT        INT,
    REG_TIME        DATETIME
);