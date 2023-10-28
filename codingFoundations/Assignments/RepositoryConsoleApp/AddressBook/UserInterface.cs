public class UserInterface
{

    AddressBookRepository addressRepo = new AddressBookRepository();

    bool keepRunning = true;
    void DisplayMenu()
    {
        Console.WriteLine("Option 1: List all Contacts ");
        Console.WriteLine("Option 2: Add a Contact");
        Console.WriteLine("Option 3: Edit Contact");
        Console.WriteLine("Option 4: Delete Contact");
        string choice = Console.ReadLine();
        Console.Clear();
        
        switch(choice)
        {
            case "1":
                ReadAddressBookContact();
                break;
            case "2":
                AddContact();
                break;
            case "3":
                EditContactById();
                break;
            case "4":

                break;
            default:
                keepRunning = false;
                break;
        
        }
    }
    
    void AddContact()
    {
        Console.WriteLine("What is the contact Id:");
        int id = Console.ReadLine();

        Console.WriteLine("What is the contacts name:");
        string name = Console.ReadLine();

        Console.WriteLine("Phone number: ");
        int phoneNumber = Console.ReadLine();

        Console.WriteLine("Email: ");
        string email = Console.ReadLine();

        Console.WriteLine("Address: ");
        string address = Console.ReadLine();

        AddressBook contact = new AddressBook(name, phoneNumber, email, address);
        addressRepo.CreateContact(contact);
    }

    void ReadAddressBookContact(AddressBookRepository addressRepo)
    {
        Console.WriteLine("Contact List:");
        Dictionary<AddressBook, int> contactList = addressRepo.GetContactList();
        foreach (AddressBook contact in contactList)
        {
            Console.WriteLine($"Id: {contact.Id} Name: {contact.Name}");
        }
    }

    void EditContactById()
    {
        Console.WriteLine("Input an Id: ");
        int idInput = Console.ReadLine();

        addressRepo.GetContactById();
        
        System.Console.WriteLine("Edit Options: ");
        System.Console.WriteLine($"Option 1) Name: {contact.Name}");
        System.Console.WriteLine($"Option 2) Phone Number: {contact.PhoneNumber}");
        System.Console.WriteLine($"Option 3) Email: {contact.Email}");
        System.Console.WriteLine($"Option 4) Address: {contact.Address}");
        string option = Console.ReadLine();

        switch (option)
        {
            case "1":
                addressRepo.EditNameById(idInput, name);
                break;
            case "2":
                addressRepo.EditPhoneNumberById(idInput, phoneNumber);
                break;
            case "3":
                addressRepo.EditEmailById(idInput, email);
                break;
            case "4":
                addressRepo.EditAddressById(idInput, address);
                break;
            default:
                break;
        }
      }

      static void DeleteContactById()
      {
        Console.WriteLine("What is the contact Id: ");
        int id = Console.ReadLine();

        addressRepo.GetContactById(id);
        Console.WriteLine($"")
        
        
      }
    

}