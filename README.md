# Zadanie Frontend developer GoodRequest

Cieľom zadania je vytvoriť jednoduchú aplikáciu v Reacte, ktorá slúži ako formulár pre (neexistujúcu) nadáciu GoodBoy na podporu slovenských útulkov pre psy. 

**Aplikácia by mala umožňovať potenciálnym podporovateľom:**

*  zvoliť si formu pomoci - všeobecný príspevok pre nadáciu alebo príspevok pre konkretný útulok (povinné pole)
*  vybrať si konkrétny útulok zo zoznamu zapojených útulkov (nepovinné v prípade všeobecného príspevku, v opačnom prípade povinné pole)
*  zvoliť si výšku príspevku, pričom je možné nastaviť aj vlastnú hodnotu (povinné pole)
*  vyplniť svoje osobné údaje:
    **  meno - nepovinné pole (2-20 znakov)
    **  priezvisko - povinné pole (2-30 znakov)
    **  e-mail - validný formát e-mailovej adresy
    **  telefón - slovenské alebo české číslo s predvoľbou +420 / +421 so zobrazením zvolenej krajiny vo forme vlajky štátu
*  potvrdiť súhlas so spracovaním osobných údajov (povinné pole)
*  odoslať zvalidovaný formulár, prípadne zrozumiteľne oznámiť používateľovi chybový stav

Pre účely zadania sme vytvorili 2 jednoduché API endpointy - GET zoznamu útulkov zapojených do projektu a POST na odoslanie obsahu formuláru. Dokumentáciu k nim nájdete na nasledovnom odkaze:
// TODO - Pridať link na APIDOC

Grafické podklady pre zadanie nájdete na nasledovnom odkaze (registrácia do toolu Figma je zdarma):
https://www.figma.com/file/FyxU4Zzp54tOrmQBNTly7G/GoodRequest-Frontend-Assignment

// TODO - Pridať akceptačné kritériá