using AddressBook;


public class AddressBookRepository
{
     private readonly Dictionary<int, AddressBookContact> _addressBook = new Dictionary<int , AddressBookContact>();

    // Create
    public bool CreateContact(int id)
    {
        AddressBookContact contact = GetContactById(id);
        
        // Checking to make sure that Id doesn't already exist.
        if (contact != null)
        {
            return false;
        }

        AddressBookContact contact = new AddressBookContact();
        contact.Id = id;

        int startingCount = _addressBook.Count();
        if (contact != null)
        {
            _addressBook.Add(contact.Id, contact);
        }

        bool countIncreased = _addressBook.Count() > startingCount;
        return countIncreased;
    }

    // Read
    public Dictionary<int, AddressBookContact> GetContactList()
    {
        return ;
    }

    public AddressBookContact GetContactByName(string name)
    {
        foreach (AddressBookContact contact in _addressBook)
        {
            if(String.Equals(contact.Name, name, StringComparison.OrdinalIgnoreCase))
            {
                return contact;
            }
        }
        
        return null;
    }

    public AddressBookContact GetContactById(int id)
    {
        foreach (AddressBookContact contact in _addressBook)
        {
            if(contact.Id == id)
            {
                return contact;
            }
        }
        
        return null;
    }

    //Update
    public bool EditNameById(int id, string name)
    {
        return EditContactById(id, name, -1, null, null);
    }

    public bool EditAddressById(int id, string address)
    {
        return EditContactById(id, null, -1, null, address);
    }

    public bool EditEmailById(int id, string email)
    {
        return EditContactById(id, null, -1, email, null);
    }

    public bool EditPhoneNumberById(int id, int phoneNumber)    
    {
        return EditContactById(id, null, phoneNumber, null, null);
    }

    public bool EditContactById(int id, string name, int phoneNumber, string email, string address)
    {
        AddressBookContact contact = GetContactById(id);

        if (contact == null)
        {
            console.WriteLine("Already to existing id.");
            return false;
        }

        if (name != null && name.Length > 0)
        {
            contact.Name = name;  
        }

        if (email != null && email.Length > 0)        
        {
            contact.Email = email;
        }

        if (address != null && address.Length > 0)
        {
            contact.Address = address;
        }

        if (phoneNumber >= 0 && phoneNumber.ToString().Length == 10)
        {
            contact.PhoneNumber = phoneNumber;
        }

        return true;
    }

    //Delete
    public bool DeleteContactById(int id)
    {
        AddressBookContact targetContact = GetContactById(id);
        
        if (targetContact < 0)
        {
            return false;
        }

        bool deleteResult = _addressBook.Remove(targetContact);
        return deleteResult;
    }
}

