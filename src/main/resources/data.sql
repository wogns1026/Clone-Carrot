DELETE FROM TB_USERS;
DELETE FROM TB_ITEMS;

INSERT INTO TB_ITEMS (ITEM_ID, CATEGORY, COST, DESCRIPTION, IMAGE, ITEM_REG_TIME, ITEM_TITLE, SELLER_ID, STATUS, VIEW_CNT)
VALUES
    (1, '디지털기기', 100000, 'TV 팔아유~~', 'IMAGE', CURRENT_TIMESTAMP, '24인치 TV', 1, true, 65),
    (2, '기타 중고물품', 5400, '기프티콘 팝니다!!', 'IMAGE', CURRENT_TIMESTAMP, '치킨 기프티콘', 1, true, 41),
    (3, '가구/인테리어', 50000, '좌석 의자 팔아요!!', 'IMAGE', CURRENT_TIMESTAMP, '좌석 의자', 2, true, 22),
    (4, '기타 중고물품', 60000, '삼천리브리즈 자전거 팔아요.', 'IMAGE', CURRENT_TIMESTAMP, '삼천리브리즈자전거', 2, true, 5),
    (5, '유아동', 1000, '아기들 팩우유 마실때 사용하는 홀더입니다.', 'IMAGE', CURRENT_TIMESTAMP, '우유홀더 우유케이스 우유손잡이', 3, true, 35);


INSERT INTO TB_USERS (USER_ID, USER_NAME, ADDRESS, MANNER_TEMPER, RETRADE_RATE, REVIEW)
VALUES
    (1, '한지훈', '화성시', 34, 5, '이거 뭐였지???'),
    (2, '이재훈', '수원시', 100, 100, '이거 뭐였지???'),
    (3, '이소정', '서울시', 4, 0, '이거 뭐였지???');