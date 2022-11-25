---
sidebar_position: 2
---

# 案例：Secure Home Access

Secure Home Access: the system offers house access control using a central computer. 

## 1. Requirement Description

The **“Secure Home Access”** system could be required to **authenticate** (“Are you who you claim to be?”) and **validate** (“Are you supposed to be entering this building?”) people attempting to enter a building. 

Our first case-study system provides several functions for controlling the home access, such as door lock control, lighting control, and intrusion detection and warning.

![SHA-UML](/img/tutorial/sha0.png) 


## 2. Requirement Modeling
The summary of a single iteration of the software development lifecycle.
![SHA-UML](/img/tutorial/sha1.png) 

## 3. Use Case Diagram
- The UML use case diagram for the device-control subsystem of the home access system.
![SHA-UML](/img/tutorial/sha2.png) 

- The Use cases for the account-management subsystem of the home access system.
![SHA-UML](/img/tutorial/sha3.png) 

## 4. System Sequence Diagrams
The UML System sequence diagrams for the Unlock use case.

- Main success scenario
![SHA-UML](/img/tutorial/sha4.png) 

- Burglary attempt scenario
![SHA-UML](/img/tutorial/sha5.png) 

## 5. Designing Object Interactions
From system sequence diagrams to interaction diagrams: the magnifier glass symbolizes looking at interactions inside the system.
![SHA-UML](/img/tutorial/sha6.png) 

## 6. Sequence Diagrams
The sequence diagram for the system function “enter key”
![SHA-UML](/img/tutorial/sha7.png) 

## 7. Class Diagram
Class diagram is created simply by reading the class names and their operations off of the interaction diagrams.
![SHA-UML](/img/tutorial/sha8.png) 

## 8. State Diagram
The UML state diagram for the Controller class.
![SHA-UML](/img/tutorial/sha9.png) 

## 9. Software Testing
Testing is usually guided by the hierarchical structure of the system as designed in the analysis and design phases.
![SHA-UML](/img/tutorial/sha10.png) 
