AVD Technical Sheet — Full Technical Document
Technical Sheet — AVD (Adaptive Visual Dynamics)
Version: 1.0
Project Nature: Technical specification + algorithmic procedure
Author: Pelloweb
License: MIT (official English version)

1. Project Motivation
Reading on digital screens often causes visual fatigue in users with correctable optical conditions (astigmatism, hyperopia, presbyopia).
Even when wearing glasses, digital content is not always presented in a way that matches their optical characteristics.

AVD proposes a universal algorithmic procedure that generates presentation rules adapted to each user, without modifying medical data or replacing optical correction.

2. Nature of the Algorithm
AVD is a visual adaptation algorithm that:

receives correctable optical parameters,

interprets them through internal rules,

generates dynamic presentation adjustments,

and produces a set of recommendations or transformations applicable to interfaces, text, or digital content.

It is not an application or executable software:
it is a technical specification and algorithmic procedure.

3. Optical Parameters Used (Inputs)
The algorithm uses four standard optometric parameters:

Sphere (S)

Cylinder (C)

Axis (A)

Addition (Add)

These values allow the calculation of:

contrast sensitivity,

text size tolerance,

optimal visual density,

recommended spacing,

content structure for improved readability.

4. Algorithm Outputs
AVD generates a set of presentation rules that may include:

recommended text size,

line spacing,

paragraph spacing,

minimum contrast,

optimal visual density,

block structure,

design recommendations.

These rules can be applied by:

web interfaces,

mobile applications,

operating systems,

digital readers,

accessibility tools.

5. Algorithm Scope
AVD is designed for:

users with correctable optical conditions,

digital reading environments,

text‑dominant interfaces,

systems capable of dynamic adaptation.

It does not aim to:

replace optical correction,

diagnose medical conditions,

modify clinical data,

act as a medical tool.

6. Limitations
It is not a medical device.

It does not interpret clinical data beyond its algorithmic purpose.

It does not replace glasses or treatments.

It does not guarantee clinical improvements, only readability improvements.

It requires external implementation (it is not executable software by itself).

7. Compatibility
AVD can be integrated into:

HTML/CSS/JS

mobile applications

operating systems

digital readers

accessibility frameworks

text rendering engines

The algorithm is independent of programming language.

8. Research Path
Future areas:

refinement of rules based on readability studies,

real‑time dynamic adaptation,

integration with AI for advanced personalization,

predictive models of visual fatigue,

compatibility with AR/VR devices.

9. Next Steps
Prototype implementation

User validation

Extended documentation

Publication of full algorithm

Opening the repository to the public
