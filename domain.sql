ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12M@y2001';
use blood_bank_management;

alter table donor_registration add constraint pass check(length(Password)>8);
alter table acceptor add constraint blood check (Blood_Sign in ('+','-')) ;
alter table acceptor add constraint c1 check(Blood_Group='A' or Blood_Group='B' or Blood_Group='AB' or Blood_Group='O');

alter table blood add constraint bsign check (Blood_Sign in ('+','-')) ;
alter table blood add constraint a2 check(Blood_Group='A' or Blood_Group='B' or Blood_Group='AB' or Blood_Group='O');

alter table sale add constraint bscon check (Blood_Sign in ('+','-')) ;
alter table sale add constraint a3 check(Blood_Group='A' or Blood_Group='B' or Blood_Group='AB' or Blood_Group='O');

alter table stock add constraint bcon check (Blood_Sign in ('+','-')) ;
alter table stock add constraint a4 check(Blood_Group='A' or Blood_Group='B' or Blood_Group='AB' or Blood_Group='O');

alter table donor_registration add constraint age check (Age<49 AND Age >17) ;
ALTER TABLE donor_registration DROP CONSTRAINT age;
alter table donor_registration add constraint gender check (Gender in ('F','M')) ;
alter table donor_registration add constraint bs check (Blood_Sign in ('+','-')) ;
alter table donor_registration add constraint a5 check(Blood_Group='A' or Blood_Group='B' or Blood_Group='AB' or Blood_Group='O');

alter table disease add constraint constraint1 check(Blood_Pressure in('Yes','No'));
alter table disease add constraint constraint2 check(Sugar in('Yes','No'));
alter table disease add constraint constraint3 check(Animia in('Yes','No'));
alter table disease add constraint constraint4 check(Chain_Smoker in('Yes','No'));
alter table disease add constraint constraint5 check(HIV in('Yes','No'));
alter table disease add constraint constraint6 check(Allergy in('Yes','No'));
alter table disease drop constraint cons;

alter table donation add constraint constraint7 check(Disease in('Yes','No'));
alter table donation drop constraint constraint8;
alter table donation add constraint constraint8 check(Availability in('Yes','No'));

UPDATE donor_registration SET Password='uroosa' WHERE Donor_id=1024;
select * from donor_registration;
select * from disease;
select * from location;
select * from blood;
select * from donation ;
select * from acceptor;


select donor_registration.First_Name, donor_registration.Last_Name, donor_registration.ContactNo,location.BloodCentre 
from donor_registration join donation 
on donor_registration.Donor_id=donation.Donor_Id 
join location
on location.location_ID=donation.Location_ID 
where location.Area='Malir' and donor_registration.Blood_Group='A'and donor_registration.Blood_Sign='-' and  donation.availability='yes';


select Location_ID from Location where Area='Malir' and BloodCentre='Hussaini Blood Bank';
select location.Area,location.BloodCentre,donation.Date_of_Donation,donation.Availability,donation.Weight from donation join location on location.location_ID=donation.Location_ID where Donor_Id=1024 and availability='no';
ALTER TABLE `blood_bank_management`.`acceptor` 
ADD INDEX `Donation_ID_idx` (`Donation_ID` ASC) VISIBLE;
;
ALTER TABLE `blood_bank_management`.`acceptor` 
ADD CONSTRAINT `Donation_id`
  FOREIGN KEY (`Donation_id`)
  REFERENCES `blood_bank_management`.`donation` (`Donation_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
ALTER TABLE `blood_bank_management`.`acceptor` 
ADD COLUMN `Donate_ID` INT NOT NULL AFTER `Email`,
ADD CONSTRAINT `Donate_id`
  FOREIGN KEY (`Donate_id`)
  REFERENCES `blood_bank_management`.`donation` (`Donation_id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
ALTER TABLE `blood_bank_management`.`acceptor` 
DROP COLUMN `Donation_ID`,
DROP INDEX `Donation_ID_idx` ;
Select Donation_id from donation order by Donation_id desc;
;
Select Donation_id from donation order by Donation_id desc;
commit;

DELETE FROM donation WHERE Donor_id =  and Availability='yes'