#pragma once
#include <string>
#include <eosiolib/eosio.hpp>
// #include <eosio.system/native.hpp>
#include <eosiolib/asset.hpp>
#include <eosiolib/time.hpp>
#include <eosiolib/privileged.hpp>
// #include <eosiolib/singleton.hpp>

namespace DELEX {

	using eosio::asset;
	using eosio::indexed_by;
	using eosio::const_mem_fun;
	// using eosio::block_timestamp;

    //@abi table delexmarket i64
	struct delex_order {
		account_name 	device;
		account_name 	account;
		// std::string		device_name;
		std::string		location;
		asset 		    power;
		uint64_t 		price;
		bool	 		is_active = true;


		auto primary_key() const { return device; }
		uint64_t by_high_price() const { return static_cast<uint64_t>(-price); }
	};

	typedef eosio::multi_index< N(delexmarket), delex_order,
                               indexed_by<N(price), const_mem_fun<delex_order, uint64_t, &delex_order::by_high_price>  >
                               >  delexmarket_table;

    class  DELEXProtocol: public eosio::contract  {
	    private:
	    	delexmarket_table 	_delexmarket;
	    public:

	    	DELEXProtocol( account_name self );
	    	//Todo:: account own deviecs?
			void regstaion(account_name account, account_name device, std::string location, asset power, uint64_t price);

			void unregstaion(account_name account, account_name device);

			void setstaion(account_name account, account_name device, std::string location, asset power, uint64_t price);

			void buypower(account_name account, account_name device, asset power);

			void accident(account_name account, account_name device, asset actualPower);
			// function buyPowerWithMoney(device, price)

			//Todo:: Community
			// function apply()
    };
}