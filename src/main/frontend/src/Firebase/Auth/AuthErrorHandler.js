import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthErrorHandler = (errorCode) => {
  if (errorCode === "auth/claims-too-large")
    toast.error(
      "setCustomUserClaims()에 제공된 클레임 페이로드가 최대 허용 크기인 1,000바이트를 초과합니다."
    );
  else if (errorCode === "auth/email-already-exists")
    toast.error(
      "제공된 이메일을 기존 사용자가 이미 사용 중입니다. 각 사용자마다 이메일이 고유해야 합니다."
    );
  else if (errorCode === "auth/id-token-expired")
    toast.error("제공된 Firebase ID 토큰이 만료되었습니다.");
  else if (errorCode === "auth/id-token-revoked")
    toast.error("Firebase ID 토큰이 취소되었습니다.");
  else if (errorCode === "auth/insufficient-permission")
    toast.error(
      "Admin SDK 초기화에 사용된 사용자 인증 정보에는 요청한 인증 리소스에 액세스할 권한이 없습니다. 적절한 권한을 가진 사용자 인증 정보를 생성하고 Admin SDK를 인증하는 데 사용하는 방법에 대한 도움말은 Firebase 프로젝트 설정을 참조하세요."
    );
  else if (errorCode === "auth/internal-error")
    toast.error(
      "인증 서버에서 요청을 처리하려고 시도하는 중에 예기치 않은 오류가 발생했습니다. 오류 메시지에는 추가 정보가 들어 있는 인증 서버의 응답이 포함되어야 합니다. 오류가 계속되면 버그 신고 지원 채널에 문제를 신고하시기 바랍니다."
    );
  else if (errorCode === "auth/invalid-argument")
    toast.error(
      "인증 메서드에 잘못된 인수가 제공되었습니다. 오류 메시지에 추가 정보가 들어 있습니다."
    );
  else if (errorCode === "auth/invalid-claims")
    toast.error(
      "setCustomUserClaims()에 제공된 커스텀 클레임 속성이 잘못되었습니다."
    );
  else if (errorCode === "auth/invalid-continue-uri")
    toast.error("연결 URL은 올바른 URL 문자열이어야 합니다.");
  else if (errorCode === "") toast.error("");
  else if (errorCode === "auth/invalid-creation-time")
    toast.error("생성 시간이 올바른 UTC 날짜 문자열이어야 합니다.");
  else if (errorCode === "auth/invalid-credential")
    toast.error(
      "Admin SDK 인증에 사용된 사용자 인증 정보로는 원하는 작업을 수행할 수 없습니다. createCustomToken() 및 verifyIdToken()과 같은 특정 인증 메서드는 갱신 토큰이나 애플리케이션 기본 사용자 인증 정보와는 달리 사용자 인증 정보 인증서로 SDK를 초기화해야 합니다. 사용자 인증 정보 인증서로 Admin SDK를 인증하는 방법은 SDK 초기화 문서를 참조하세요."
    );
  else if (errorCode === "auth/invalid-disabled-field")
    toast.error(
      "disabled 사용자 속성에 제공된 값이 잘못되었습니다. 이 값은 부울이어야 합니다."
    );
  else if (errorCode === "auth/invalid-display-name")
    toast.error(
      "displayName 사용자 속성에 제공된 값이 잘못되었습니다. 이 값은 비어 있지 않은 문자열이어야 합니다."
    );
  else if (errorCode === "auth/invalid-dynamic-link-domain")
    toast.error(
      "제공된 동적 링크 도메인이 구성되지 않거나 현재 프로젝트에 대해 승인되지 않았습니다."
    );
  else if (errorCode === "auth/invalid-email")
    toast.error(
      "email 사용자 속성에 제공된 값이 잘못되었습니다. 이 값은 문자열 이메일 주소여야 합니다."
    );
  else if (errorCode === "auth/invalid-email-verified")
    toast.error(
      "emailVerified 사용자 속성에 제공된 값이 잘못되었습니다. 이 값은 부울이어야 합니다."
    );
  else if (errorCode === "auth/invalid-hash-algorithm")
    toast.error(
      "해시 알고리즘이 지원되는 알고리즘 목록의 문자열 중 하나와 일치해야 합니다."
    );
  else if (errorCode === "auth/invalid-hash-block-size")
    toast.error("해시 블록 크기가 올바른 숫자여야 합니다.");
  else if (errorCode === "auth/invalid-hash-derived-key-length")
    toast.error("해시에서 파생된 키 길이가 올바른 숫자여야 합니다.");
  else if (errorCode === "auth/invalid-hash-key")
    toast.error("해시 키가 올바른 바이트 버퍼여야 합니다.");
  else if (errorCode === "auth/invalid-hash-memory-cost")
    toast.error("해시 메모리 비용이 올바른 숫자여야 합니다.");
  else if (errorCode === "auth/invalid-hash-parallelization")
    toast.error("해시 병렬 처리가 올바른 숫자여야 합니다.");
  else if (errorCode === "auth/invalid-hash-rounds")
    toast.error("해시 라운드가 올바른 숫자여야 합니다.");
  else if (errorCode === "auth/invalid-hash-salt-separator")
    toast.error(
      "해싱 알고리즘 솔트 구분자 필드가 올바른 바이트 버퍼여야 합니다."
    );
  else if (errorCode === "auth/invalid-id-token")
    toast.error("제공된 ID 토큰이 올바른 Firebase ID 토큰이 아닙니다.");
  else if (errorCode === "auth/invalid-last-sign-in-time")
    toast.error("마지막 로그인 시간이 올바른 UTC 날짜 문자열이어야 합니다.");
  else if (errorCode === "auth/invalid-page-token")
    toast.error(
      "listUsers()에 제공된 다음 페이지 토큰이 잘못되었습니다. 비어 있지 않은 유효한 문자열이어야 합니다."
    );
  else if (errorCode === "auth/invalid-password")
    toast.error(
      "password 사용자 속성에 제공된 값이 잘못되었습니다. 이 값은 6자 이상의 문자열이어야 합니다."
    );
  else if (errorCode === "auth/invalid-password-hash")
    toast.error("비밀번호 해시가 올바른 바이트 버퍼여야 합니다.");
  else if (errorCode === "auth/invalid-password-salt")
    toast.error("비밀번호 솔트가 올바른 바이트 버퍼여야 합니다.");
  else if (errorCode === "auth/invalid-phone-number")
    toast.error(
      "phoneNumber에 제공된 값이 잘못되었습니다. 이 값은 E.164 표준과 호환되는 비어 있지 않은 식별자 문자열이어야 합니다."
    );
  else if (errorCode === "auth/invalid-photo-url")
    toast.error(
      "photoURL 사용자 속성에 제공된 값이 잘못되었습니다. 이 값은 문자열 URL이어야 합니다."
    );
  else if (errorCode === "auth/invalid-provider-data")
    toast.error("providerData가 올바른 UserInfo 객체 배열이어야 합니다.");
  else if (errorCode === "auth/invalid-provider-id")
    toast.error(
      "providerId가 지원되는 올바른 제공업체 식별자 문자열이어야 합니다."
    );
  else if (errorCode === "auth/invalid-oauth-responsetype")
    toast.error("정확히 하나의 OAuth responseType만 true로 설정해야 합니다.");
  else if (errorCode === "auth/invalid-session-cookie-duration")
    toast.error(
      "세션 쿠키 기간이 5분에서 2주 사이의 올바른 밀리초 단위 숫자여야 합니다."
    );
  else if (errorCode === "auth/invalid-uid")
    toast.error(
      "제공된 uid는 128자(영문 기준) 이하의 비어 있지 않은 문자열이어야 합니다."
    );
  else if (errorCode === "auth/invalid-user-import")
    toast.error("가져올 사용자 레코드가 잘못되었습니다.");
  else if (errorCode === "auth/maximum-user-count-exceeded")
    toast.error("가져올 수 있는 최대 사용자 수를 초과했습니다.");
  else if (errorCode === "auth/missing-android-pkg-name")
    toast.error(
      "Android 앱을 설치해야 할 경우 Android 패키지 이름을 제공해야 합니다."
    );
  else if (errorCode === "auth/missing-continue-uri")
    toast.error("요청에 올바른 연결 URL을 제공해야 합니다.");
  else if (errorCode === "auth/missing-hash-algorithm")
    toast.error(
      "비밀번호 해시를 사용해 사용자를 가져오려면 해싱 알고리즘 및 매개변수를 제공해야 합니다."
    );
  else if (errorCode === "auth/missing-ios-bundle-id")
    toast.error("요청에 iOS 번들 ID가 누락되었습니다.");
  else if (errorCode === "auth/missing-uid")
    toast.error("현재 작업에 uid 식별자가 필요합니다.");
  else if (errorCode === "auth/missing-oauth-client-secret")
    toast.error(
      "OIDC 코드 흐름을 사용 설정하려면 OAuth 구성 클라이언트 비밀번호가 필요합니다."
    );
  else if (errorCode === "auth/operation-not-allowed")
    toast.error(
      "제공된 로그인 제공업체가 Firebase 프로젝트에서 사용 중지되었습니다. Firebase Console의 로그인 방법 섹션에서 사용 설정하세요."
    );
  else if (errorCode === "auth/phone-number-already-exists")
    toast.error(
      "제공된 phoneNumber을 기존 사용자가 이미 사용 중입니다. 사용자마다 phoneNumber가 고유해야 합니다."
    );
  else if (errorCode === "auth/project-not-found")
    toast.error(
      "Admin SDK를 초기화하는 데 사용한 사용자 인증 정보에 해당하는 Firebase 프로젝트가 없습니다. 프로젝트의 사용자 인증 정보를 생성하고 Admin SDK를 인증하는 데 사용하는 방법에 대한 도움말은 Firebase 프로젝트 설정을 참조하세요."
    );
  else if (errorCode === "auth/reserved-claims")
    toast.error(
      "setCustomUserClaims()에 제공된 하나 이상의 커스텀 사용자 클레임이 예약되어 있습니다. 예를 들어 OIDC용 클레임(예: sub, iat, iss, exp, aud, auth_time 등)은 커스텀 클레임의 키로 사용할 수 없습니다."
    );
  else if (errorCode === "auth/session-cookie-expired")
    toast.error("제공된 Firebase 세션 쿠키가 만료되었습니다.");
  else if (errorCode === "auth/session-cookie-revoked")
    toast.error("Firebase 세션 쿠키가 취소되었습니다.");
  else if (errorCode === "auth/uid-already-exists")
    toast.error(
      "제공된 uid를 기존 사용자가 이미 사용하고 있습니다. 각 사용자마다 uid가 고유해야 합니다."
    );
  else if (errorCode === "auth/unauthorized-continue-uri")
    toast.error(
      "연결 URL의 도메인이 허용 목록에 포함되어 있지 않습니다. Firebase Console에서 도메인을 허용해야 합니다."
    );
  else if (errorCode === "auth/user-not-found")
    toast.error("제공된 식별자에 해당하는 기존 사용자 레코드가 없습니다.");

  return <ToastContainer />;
};
export default AuthErrorHandler;
