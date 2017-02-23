# leek-scripts

This repository stores multiple "IA" scripts for [LeekWars](https://leekwars.com)

## Repository organization

### Helpers

The "Helpers" directory provides scripts with helper functions
for different purposes : weapon usage, chips usage, movements, ...

These functions aims for :

* simplicity : covering a single task
* operation efficient : avoid using costly operations carelessly
* context-free : avoid logic based on a specific context or hypothesis

### Strategies

The "Strategies" directory stores "main" scripts which can be affected to leeks.
Most contributors are working on their own script without intervention of the others.

## How to map code from GitHub to LeekWars UI ?

Currently, this process is manual : meaning that you have to create the same 
directory hierarchy in your LeekWars editor & copy/paste code from your filesystem / GitHub web UI.
 
For sure this is not convenient.
Leads to do this automatically are :

* https://github.com/AlucardDH/leekwars
* https://github.com/Neospiro/LeekWarsSourceSync