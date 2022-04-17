import { CreateAccountDto } from './db/dtos/create-account.dto';
import { Account, iAccount } from './db/models/Account';

class AccountService {
  async create(accountDto: CreateAccountDto): Promise<iAccount> {
    const accountCreated = await Account.create({
      ...accountDto,
      balance: accountDto.initialBalance
    })

    console.log('LOG ACCOUNT CREATED: ', accountCreated)
    return accountCreated
  }

  async updateBalance(account: string, value: number, type: string): Promise<boolean> {
    const accountToUpdate = await Account.findOne({ _id: account })

    if (!accountToUpdate) {
      console.log(`LOG ACCOUNT ${account} NOT FOUND!`)
      return false
    }

    switch (type) {
      case 'income':
        console.log('VALOR SOMADO', accountToUpdate.balance + value)
        accountToUpdate.balance = accountToUpdate.balance + value;
        break;
      case 'expense':
        accountToUpdate.balance = accountToUpdate.balance - value;
        break
    }

    await accountToUpdate.save()
    return true
  }
}

export default AccountService
