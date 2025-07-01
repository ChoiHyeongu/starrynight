# Starrynight Discord Mini Game Bot

이 저장소는 간단한 디스코드 미니게임 봇 예제입니다. 봇을 사용하려면 다음 단계를 따라 주세요.

## 준비
1. Node.js 18 이상이 설치되어 있어야 합니다.
2. `.env.example` 파일을 `.env` 로 복사하고 `DISCORD_TOKEN` 값을 입력하세요.
3. 의존성 설치 후 빌드합니다.
   ```bash
   npm install
   npm run build
   ```

## 실행 방법
개발 환경에서는 TypeScript 소스를 직접 실행할 수 있습니다.
```bash
npm start
```

빌드된 코드를 실행하려면 다음과 같이 합니다.
```bash
npm run start:prod
```

봇이 실행되면 `!` 접두사를 사용하여 다음 명령을 사용할 수 있습니다.
- `!rps 이름:가위 이름:바위` – 가위바위보
- `!ladder 이름1 이름2 ...` – 사다리타기
- `!roulette 이름1 이름2 ...` – 러시안 룰렛
- `!coin 이름:앞면 이름:뒷면` – 동전 던지기
- `!dice [면수] 이름1 이름2 ...` – 주사위 굴리기
