#include <Adafruit_NeoPixel.h>

#define LED_PIN1    2
#define LED_PIN2    3  
#define LED_PIN3    4  
#define LED_PIN4    5  
#define LED_PIN5    6  
#define LED_PIN6    7  
#define LED_PIN7    8  
#define LED_PIN8    9
#define LED_PIN9    10

#define LED_COUNT  8

Adafruit_NeoPixel strip1(LED_COUNT, LED_PIN1, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel strip2(LED_COUNT, LED_PIN2, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel strip3(LED_COUNT, LED_PIN3, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel strip4(LED_COUNT, LED_PIN4, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel strip5(LED_COUNT, LED_PIN5, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel strip6(LED_COUNT, LED_PIN6, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel strip7(LED_COUNT, LED_PIN7, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel strip8(LED_COUNT, LED_PIN8, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel strip9(LED_COUNT, LED_PIN9, NEO_GRB + NEO_KHZ800);

Adafruit_NeoPixel *strips[] = {&strip1, &strip2, &strip3, &strip4, &strip5, &strip6, &strip7, &strip8, &strip9};

bool initialBlink = true;

void setup() {
  Serial.begin(9600);
  for (int i = 0; i < 9; i++) {
    strips[i]->begin();
    strips[i]->show();
    strips[i]->setBrightness(255);
  }
}


void turnOnSequential(Adafruit_NeoPixel& strip, int r, int g, int b) {
  for (int i = 0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, r, g, b);
    strip.show();
    delay(100);
  }
}

void turnOnStrip(Adafruit_NeoPixel& strip, int r, int g, int b) {
  for (int i = 0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, r, g, b);
  }
  strip.show();
}

void turnOffStrip(Adafruit_NeoPixel& strip) {
  for (int i = 0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, 0, 0, 0);
  }
  strip.show();
}

void turnOffAll() {
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < strips[i]->numPixels(); j++) {
      strips[i]->setPixelColor(j, strips[i]->Color(0, 0, 0));
    }
    strips[i]->show();
  }
}

void loop() {
  if (initialBlink) { // 처음 Idle 상태에서 1, 2, 3번 네오픽셀 깜빡이게
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < strips[i]->numPixels(); j++) {
        strips[i]->setPixelColor(j, strips[i]->Color(255, 255, 255));
      }
    }
    for (int i = 0; i < 3; i++) {
      strips[i]->show();
    }
    delay(500); // Adjust the delay as needed
    turnOffAll(); // Turn off the lights before the next iteration
    delay(500); // Adjust the delay as needed
  }

  if (Serial.available() > 0) {
    char command = Serial.read();
    initialBlink = false; // Stop the initial blinking
    switch (command) {
      case '1':
        // Red theme
        turnOnSequential(strip1, 255, 0, 0);
        while (Serial.available() == 0) {
          turnOnStrip(strip6, 255, 0, 0);
          turnOnStrip(strip4, 255, 0, 0);
          delay(500);
          turnOffStrip(strip4);
          turnOffStrip(strip6);
          delay(500);
        }
        break;
      case '2':
        // Green theme
        turnOnSequential(strip2, 0, 255, 0);
        while (Serial.available() == 0) {
          turnOnStrip(strip5, 0, 255, 0);
          turnOnStrip(strip6, 0, 255, 0);
          delay(500);
          turnOffStrip(strip5);
          turnOffStrip(strip6);
          delay(500);
        }
        break;
      case '3':
        // Blue theme
        turnOnSequential(strip3, 0, 0, 255);
        while (Serial.available() == 0) {
          turnOnStrip(strip6, 0, 0, 255);
          delay(500);
          turnOffStrip(strip6);
          delay(500);
        }
        break;
      case '4':
        // Purple theme
        turnOnSequential(strip4, 128, 0, 128);
        while (Serial.available() == 0) {
          turnOnStrip(strip8, 128, 0, 128);
          delay(500);
          turnOffStrip(strip8);
          delay(500);
        }
        break;
      case '5':
        // Indigo theme
        turnOnSequential(strip5, 75, 0, 130);
        while (Serial.available() == 0) {
          turnOnStrip(strip7, 75, 0, 130);
          delay(500);
          turnOffStrip(strip7);
          delay(500);
        }
        break;
      case '6':
        // Teal theme
        turnOnSequential(strip6, 0, 128, 128);
        while (Serial.available() == 0) {
          turnOnStrip(strip8, 0, 128, 128);
          turnOnStrip(strip9, 0, 128, 128);
          delay(500);
          turnOffStrip(strip8);
          turnOffStrip(strip9);
          delay(500);
        }
        break;
      case '7':
        turnOnSequential(strip7, 255, 69, 0);
        break;
      case '8':
        turnOnSequential(strip8, 255, 255, 0);
        break;
      case '9':
        turnOnSequential(strip9, 255, 182, 193);
        break;
      case '0':
        turnOffAll();
        initialBlink = true;
        break;
      default:
        break;
    }
    delay(50);
  }
}