const int ledPin = 23; // led
const int switchPin = 18; // switch
const int potPin = 33; // potenciómetro

int potValue = 0;           
int ledBrightness = 0;       
bool switchState = false;  

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(switchPin, INPUT_PULLUP); 
  Serial.begin(115200);    
}

void loop() {
  switchState = digitalRead(switchPin); // leer el estado del switch

  if (switchState == LOW) {              
    potValue = analogRead(potPin); // leer el potenciómetro     
    ledBrightness = map(potValue, 0, 4095, 0, 255); 
    analogWrite(ledPin, ledBrightness); // ajustar brillo
  } else {
    analogWrite(ledPin, 0);
  }

  delay(10);  
}

// Simulación
// https://wokwi.com/projects/409615387441850369 
