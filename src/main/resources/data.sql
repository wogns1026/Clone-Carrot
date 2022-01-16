DELETE FROM TB_USERS;
DELETE FROM TB_ITEMS;
DELETE FROM TB_BUY_REVIEWS;

INSERT INTO TB_ITEMS (ITEM_ID, CATEGORY, COST, DESCRIPTION, ITEM_REG_TIME, ITEM_TITLE, SELLER_ID, STATUS, VIEW_CNT, IMAGE)
VALUES
    (1, '디지털기기', 100000, 'TV 팔아유~~', CURRENT_TIMESTAMP, '24인치 TV', 1, true, 65, null),
    (2, '기타 중고물품', 5400, '기프티콘 팝니다!!', CURRENT_TIMESTAMP, '치킨 기프티콘', 1, true, 41, null),
    (3, '가구/인테리어', 50000, '좌석 의자 팔아요!!', CURRENT_TIMESTAMP, '좌석 의자', 2, true, 22, null),
    (4, '기타 중고물품', 60000, '삼천리브리즈 자전거 팔아요.', CURRENT_TIMESTAMP, '삼천리브리즈자전거', 2, true, 5, null),
    (5, '유아동', 1000, '아기들 팩우유 마실때 사용하는 홀더입니다.', CURRENT_TIMESTAMP, '우유홀더 우유케이스 우유손잡이', 3, true, 35, null);


INSERT INTO TB_USERS (USER_ID, USER_NAME, ADDRESS, MANNER_TEMPER, RETRADE_RATE, IMAGE, PHONE_NUMBER)
VALUES
    (1, '한지훈', '화성시', 34, 5, '프로필 사진', '01056478122'),
    (2, '이재훈', '수원시', 100, 100, '프로필 사진', '01045730245'),
    (3, '이소정', '서울시', 4, 0, '프로필 사진', '01042365896');

INSERT INTO TB_BUY_REVIEWS (REVIEW_ID, USER_ID, SELLER_ID, CONTENT, REG_TIME)
VALUES
    (1, 2, 1, '깔끔한 제품 파네요!!', CURRENT_TIMESTAMP ),
    (2, 2, 3, '어떻게 이런걸 파나요...', CURRENT_TIMESTAMP ),
    (3, 1, 2, '깔끔한 거래 좋았습니다!', CURRENT_TIMESTAMP ),
    (4, 3, 1, 'VERY GOOD!', CURRENT_TIMESTAMP );

INSERT INTO TB_BOARD(BOARD_ID, USER_ID, CONTENT, IMAGE, VIEW_CNT, REG_TIME)
VALUES
    (1, 2, '우리 동네 망포 땡이네 곱창 ㄱ~~~~~~', null, 3, CURRENT_TIMESTAMP ),
    (2, 1, '동탄이 최고제~', null, 1, CURRENT_TIMESTAMP ),
    (3, 2, '망포 땡이네 줄 많아서 결국 못감', null, 2, CURRENT_TIMESTAMP ),
    (4, 3, '소정이 어디 살지?', null, 5, CURRENT_TIMESTAMP );

INSERT INTO TB_REVIEWS(REVIEW_ID, BOARD_ID, CONTENT, USER_ID, REG_TIME, PARENT_REVIEW_ID)
VALUES
    (1, 1, '땡이네 정말 맛있냐??!!?!?!', 3, CURRENT_TIMESTAMP, NULL ),
    (2, 1, '그럼 맛 없겠냐??', 1, CURRENT_TIMESTAMP, 1 ),
    (3, 4, '강남 산대', 2, CURRENT_TIMESTAMP, NULL ),
    (4, 4, '아닌데..;;', 3, CURRENT_TIMESTAMP, 3 );