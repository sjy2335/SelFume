int A1A = 10;
int A1B = 8;

int A2A = 9;
int A2B = 7;

int A3A = 5;
int A3B = 6;

int A4A = 3;
int A4B = 4;

int A5A = A1;
int A5B = A0;

int A6A = A3;
int A6B = A2;

int A7A = 11;
int A7B = 12;

int A8A = A4;
int A8B = 2;

int A9A = A5;
int A9B = 13;


unsigned long lastCommandTime = 0; // Stores the last time a command was processed
int debounceDelay = 100; // Debounce delay in milliseconds

unsigned long pumpStartTime = 0; // Start time for the pump
const long pumpDuration = 2000; // Duration for which the pump should run (in milliseconds)
bool isPumpRunning = false; // Flag to track if the pump is running
int currentPumpA = 0;
int currentPumpB = 0;

void setup() {
  Serial.begin(9600);
  pinMode(A1A, OUTPUT);
  digitalWrite(A1A, LOW);
  pinMode(A1B, OUTPUT);
  pinMode(A2A, OUTPUT);
  digitalWrite(A2A, LOW);
  pinMode(A2B, OUTPUT);
  pinMode(A3A, OUTPUT);
  digitalWrite(A3A, LOW);
  pinMode(A3B, OUTPUT);
  pinMode(A4A, OUTPUT);
  digitalWrite(A4A, LOW);
  pinMode(A4B, OUTPUT);
  pinMode(A5A, OUTPUT);
  digitalWrite(A5A, LOW);
  pinMode(A5B, OUTPUT);
  pinMode(A6A, OUTPUT);
  digitalWrite(A6A, LOW);
  pinMode(A6B, OUTPUT);
  pinMode(A7A, OUTPUT);
  digitalWrite(A7A, LOW);
  pinMode(A7B, OUTPUT);
  pinMode(A8A, OUTPUT);
  digitalWrite(A8A, LOW);
  pinMode(A8B, OUTPUT);
  pinMode(A9A, OUTPUT);
  digitalWrite(A9A, LOW);
  pinMode(A9B, OUTPUT);
}

void startAndStopPump(int pinA, int pinB, int startSpeed, unsigned long runDuration,unsigned long bDuration, int stepDelay = 100, int decrementStep = 5) {
    // Start the pump
    analogWrite(pinA, startSpeed);
    digitalWrite(pinB, LOW);

    // Keep the pump running for the specified duration
    unsigned long startTime = millis();
    while(millis() - startTime < runDuration) {
        // Keep running
    }

    // Gradually decrease the speed to stop the pump
    for (int speed = startSpeed; speed >= 0; speed -= decrementStep) {
        analogWrite(pinA, speed);
        delay(stepDelay);
    }

    // Turn off the pump
    digitalWrite(pinA, LOW);
    digitalWrite(pinB, HIGH); // Keep this only if needed for your pump
    delay(bDuration); // Adjust delay as needed
    digitalWrite(pinB, LOW);
}


void loop() {
  if (Serial.available() > 0) {
    unsigned long currentTime = millis();
    if (currentTime - lastCommandTime > debounceDelay) {
      char command = Serial.read();
      lastCommandTime = currentTime;

      switch (command) {
        case '1':
          startAndStopPump(A1A, A1B, 64,2000, 340);
          break;
        case '2':
          startAndStopPump(A2A, A2B, 64,2000, 340);
          break;
        case '3':
          startAndStopPump(A3A, A3B, 64,2000, 300);
          break;
        case '4':
          startAndStopPump(A4A, A4B, 64,2000, 150);
          break;
        case '5':
          startAndStopPump(A5A, A5B, 64,2500, 330);
          break;
        case '6':
          startAndStopPump(A6A, A6B, 64,2500, 340);
          break;
        case '7':                                                                     
          startAndStopPump(A7A, A7B, 64,3000, 390);
          break;
        case '8':
          startAndStopPump(A8A, A8B, 64,3000, 390);
          break;
        case '9':
          startAndStopPump(A9A, A9B, 64,3000, 350);
          break;
      }
    }
  }

  // if (isPumpRunning && millis() - pumpStartTime >= pumpDuration) {
  //   stopPump();
  // }
}

// void startPump(int pinA, int pinB) {
//   digitalWrite(pinA, HIGH);
//   digitalWrite(pinB, LOW);
//   currentPumpA = pinA;
//   currentPumpB = pinB;
//   pumpStartTime = millis();
//   isPumpRunning = true;
// }

// void startPumpAnalog(int pinA, int pinB, int speed) {
//   analogWrite(pinA, speed); // speed can be any value from 0 to 255
//   digitalWrite(pinB, LOW);
//   currentPumpA = pinA;
//   currentPumpB = pinB;
//   pumpStartTime = millis();
//   isPumpRunning = true;
// }

// void stopPump() {
//    for (int speed = 64; speed >= 0; speed -= 5) {
//     analogWrite(currentPumpA, speed);
//     delay(100); // Adjust delay as needed
//   }
//   digitalWrite(currentPumpA, LOW);
//   digitalWrite(currentPumpB, HIGH); // 추가적인 역류 방지를 위해 HIGH 신호를 보냄
//   delay(400); // 잠깐동안 HIGH 유지
//   digitalWrite(currentPumpB, LOW); // 다시 LOW로 변경
//   isPumpRunning = false;
// }