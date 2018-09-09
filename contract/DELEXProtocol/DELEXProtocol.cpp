#include "DELEXProtocol.hpp"

namespace DELEX {
	DELEXProtocol::DELEXProtocol(account_name self)
	:contract(self),_delexmarket(_self, _self) {

	}

	void DELEXProtocol::regstaion(account_name account, account_name device, std::string location, asset power, uint64_t price) {
		require_auth(account);
		//assert

		// print( name{bidder}, " bid ", bid, " on ", name{newname}, "\n" );
		auto current = _delexmarket.find( device );

		if( current == _delexmarket.end() ) {
			eosio::print("insert new data. device:");
			_delexmarket.emplace( account, [&]( auto& b ) {
				b.device = device;
				b.account = account;
	            b.location = location;
	            b.power = power;
	            b.price = price;
	         });
	    } else {
	    	// eosio_assert(  > 0, "this auction has already closed" );
	    	eosio_assert(current->account == account, "device name is already taken");
	    	eosio_assert(current->account != account, "device name is already registered");
	    	eosio::print("not added");
	    }
		// powerStaions[device].credit = this.defaultCredit;

		// sort(powerStaions)
	}

	void DELEXProtocol::unregstaion(account_name account, account_name device) {
		require_auth(account);

		const auto&itr = _delexmarket.get(device, "device not found");
		eosio_assert(itr.account == account, "the device do not match the account");

		_delexmarket.modify(itr, account, [&](delex_order& order) {
			order.is_active=false;
		});
	}


	void DELEXProtocol::setstaion(account_name account, account_name device, std::string location, asset power, uint64_t price) {
		require_auth(account);
		eosio::print("setstaion");
	}

	void DELEXProtocol::buypower(account_name account, account_name device, asset power) {
		require_auth(account);
	}


	void DELEXProtocol::accident(account_name account, account_name device, asset actualPower) {
		require_auth(account);
	}
}

EOSIO_ABI(DELEX::DELEXProtocol, (regstaion)(unregstaion)(setstaion)(buypower)(accident))