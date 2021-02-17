/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StakeUtils } from "../StakeUtils";

export class StakeUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(api3TokenAddress: string, overrides?: Overrides): Promise<StakeUtils> {
    return super.deploy(
      api3TokenAddress,
      overrides || {}
    ) as Promise<StakeUtils>;
  }
  getDeployTransaction(
    api3TokenAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(api3TokenAddress, overrides || {});
  }
  attach(address: string): StakeUtils {
    return super.attach(address) as StakeUtils;
  }
  connect(signer: Signer): StakeUtils__factory {
    return super.connect(signer) as StakeUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakeUtils {
    return new Contract(address, _abi, signerOrProvider) as StakeUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "api3TokenAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimReleaseReferenceBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "claimReleases",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "source",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getScheduledUnstake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUnstakeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "locks",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minApr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardEpochLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardPaidForEpoch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rewardReleases",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardVestingPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "scheduleUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "totalStaked",
    outputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "updateAndGetBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fromBlock",
        type: "uint256",
      },
    ],
    name: "updateAndGetBalanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCoeff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "targetBlock",
        type: "uint256",
      },
    ],
    name: "updateUserState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint256",
        name: "unstaked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "locked",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastStateUpdateTargetBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeScheduledAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unstakeAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "destination",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052622503f660809081525062093a8060a090815250620f42406008556305f5e100600955622625a0600a5563047868c0600b556a084595161401484a000000600c55620f4240600d55600a5460115534801561005e57600080fd5b506040516134e13803806134e18339818101604052602081101561008157600080fd5b81019080805190602001909291905050508080600260405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020016001815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505060805160a0516133166101cb60003980610b72528061119b52806111df528061124f528061166f52806129c8525080611a9c52806122db5280612c3552506133166000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c806362bc78551161010f578063a87430ba116100a2578063eebb198011610071578063eebb19801461084c578063f3fef3a314610895578063f45346dc146108e3578063f4dadc6114610951576101e4565b8063a87430ba14610716578063ca0930471461078a578063decac4f5146107cc578063ee677b36146107ea576101e4565b806392093b36116100de57806392093b3614610630578063981b24d01461064e578063a09862d514610690578063a694fc3a146106e8576101e4565b806362bc7855146105205780636e0168931461056257806370a08231146105ba578063784b3c5d14610612576101e4565b80632def66201161018757806341cb8c201161015657806341cb8c20146104595780634eb05c47146104a25780634f322ae8146104c057806358780938146104de576101e4565b80632def6620146103605780632eebce2c1461036a5780633412a764146103b857806339a288bd14610410576101e4565b806313f2dad0116101c357806313f2dad01461029757806318160ddd146102e057806320a0a0e9146102fe5780632dd5090c1461031c576101e4565b806201e862146101e9578063106644131461024b578063106d08df14610269575b600080fd5b610235600480360360408110156101ff57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061099a565b6040518082815260200191505060405180910390f35b610253610a5e565b6040518082815260200191505060405180910390f35b6102956004803603602081101561027f57600080fd5b8101908080359060200190929190505050610a64565b005b6102c3600480360360208110156102ad57600080fd5b81019080803590602001909291905050506110d5565b604051808381526020018281526020019250505060405180910390f35b6102e8611106565b6040518082815260200191505060405180910390f35b610306611199565b6040518082815260200191505060405180910390f35b6103486004803603602081101561033257600080fd5b81019080803590602001909291905050506111bd565b60405180821515815260200191505060405180910390f35b6103686111dd565b005b6103b66004803603604081101561038057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611669565b005b6103fa600480360360208110156103ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611bc7565b6040518082815260200191505060405180910390f35b61043c6004803603602081101561042657600080fd5b8101908080359060200190929190505050611c13565b604051808381526020018281526020019250505060405180910390f35b6104856004803603602081101561046f57600080fd5b8101908080359060200190929190505050611c44565b604051808381526020018281526020019250505060405180910390f35b6104aa611c75565b6040518082815260200191505060405180910390f35b6104c8611c7b565b6040518082815260200191505060405180910390f35b61050a600480360360208110156104f457600080fd5b8101908080359060200190929190505050611c81565b6040518082815260200191505060405180910390f35b61054c6004803603602081101561053657600080fd5b8101908080359060200190929190505050611ca2565b6040518082815260200191505060405180910390f35b6105a46004803603602081101561057857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611cba565b6040518082815260200191505060405180910390f35b6105fc600480360360208110156105d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d06565b6040518082815260200191505060405180910390f35b61061a611db8565b6040518082815260200191505060405180910390f35b610638611dbe565b6040518082815260200191505060405180910390f35b61067a6004803603602081101561066457600080fd5b8101908080359060200190929190505050611dc4565b6040518082815260200191505060405180910390f35b6106d2600480360360208110156106a657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611e42565b6040518082815260200191505060405180910390f35b610714600480360360208110156106fe57600080fd5b8101908080359060200190929190505050611ef7565b005b6107586004803603602081101561072c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061228b565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b6107b6600480360360208110156107a057600080fd5b81019080803590602001909291905050506122c1565b6040518082815260200191505060405180910390f35b6107d46122d9565b6040518082815260200191505060405180910390f35b6108366004803603604081101561080057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506122fd565b6040518082815260200191505060405180910390f35b6108786004803603602081101561086257600080fd5b81019080803590602001909291905050506123c6565b604051808381526020018281526020019250505060405180910390f35b6108e1600480360360408110156108ab57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506123f7565b005b61094f600480360360608110156108f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506125b5565b005b61097d6004803603602081101561096757600080fd5b81019080803590602001909291905050506126f5565b604051808381526020018281526020019250505060405180910390f35b600080610a52600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b82821015610a4857838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610a02565b5050505085612726565b90508091505092915050565b600d5481565b610a6e3343611669565b6000600360016003805490500381548110610a8557fe5b90600052602060002090600202016001015490506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805490500381548110610b2f57fe5b90600052602060002090600202016001015490506000600260016002805490500381548110610b5a57fe5b906000526020600020906002020160010154905060007f00000000000000000000000000000000000000000000000000000000000000004281610b9957fe5b0490506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600601600083815260200190815260200160002060009054906101000a900460ff16158015610c2057506000600f60008481526020019081526020016000205414155b15610fb6576000610cef600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b82821015610cd257838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610c8c565b505050506010600086815260200190815260200160002054612726565b90506000610d7b6002805480602002602001604051908101604052809291908181526020016000905b82821015610d5e57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610d18565b505050506010600087815260200190815260200160002054612726565b90508082600f6000878152602001908152602001600020540281610d9b57fe5b04925060008784870281610dab57fe5b04905086811115610dba578690505b80870396508086039550610e026040518060400160405280600f81526020017f757365725368617265734e6f7720320000000000000000000000000000000000815250612825565b610e0b87612923565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101604051806040016040528043815260200189815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600260405180604001604052804381526020018881525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505083600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002016000828254039250508190555060018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600601600087815260200190815260200160002060006101000a81548160ff0219169083151502179055505050505b60008386860281610fc357fe5b04905081810187111561103e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f496e73756666696369656e7420616d6f756e740000000000000000000000000081525060200191505060405180910390fd5b42600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004018190555086600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005018190555050505050505050565b600281815481106110e257fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60003073ffffffffffffffffffffffffffffffffffffffff1663981b24d0436040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b15801561115957600080fd5b505afa15801561116d573d6000803e3d6000fd5b505050506040513d602081101561118357600080fd5b8101908080519060200190929190505050905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b600e6020528060005260406000206000915054906101000a900460ff1681565b7f0000000000000000000000000000000000000000000000000000000000000000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206004015401421180156112b6575060027f000000000000000000000000000000000000000000000000000000000000000002600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401540142105b6112bf57600080fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206005015490506113103343611669565b600060026001600280549050038154811061132757fe5b9060005260206000209060020201600101549050600060036001600380549050038154811061135257fe5b90600052602060002090600202016001015490506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001018054905003815481106113fc57fe5b90600052602060002090600202016001015490506000828585028161141d57fe5b0490508181111561143a57819050838382028161143657fe5b0494505b84600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282540192505081905550600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101604051806040016040528043815260200183850381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060026040518060400160405280438152602001838703815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600360405180604001604052804381526020018786038152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401819055506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501819055505050505050565b600e60007f0000000000000000000000000000000000000000000000000000000000000000428161169657fe5b04815260200190815260200160002060009054906101000a900460ff166116c0576116bf6129bc565b5b6116c861326f565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020016000905b8282101561178757838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611741565b505050508152602001600282015481526020016003820154815260200160048201548152602001600582015481525050905060006117c9826020015143612726565b905060008260400151905060008360600151905060008114156117eb57600190505b60606002805480602002602001604051908101604052809291908181526020016000905b828210156118555783829060005260206000209060020201604051806040016040529081600082015481526020016001820154815250508152602001906001019061180f565b505050509050600060048054905011156119b05760606004805480602002602001604051908101604052809291908181526020016000905b828210156118d35783829060005260206000209060020201604051806040016040529081600082015481526020016001820154815250508152602001906001019061188d565b5050505090506000816000815181106118e857fe5b602002602001015160000151600185031061191257600161190c8360018703612d4d565b01611915565b60005b90505b81518110801561193e57508782828151811061193057fe5b602002602001015160000151105b156119ad5761194b6132a5565b82828151811061195757fe5b602002602001015190506000611971858360000151612726565b905060006119878a602001518460000151612726565b905081818460200151028161199857fe5b04880197505050508080600101915050611918565b50505b60006005805490501115611b305760606005805480602002602001604051908101604052809291908181526020016000905b82821015611a28578382906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050815260200190600101906119e2565b505050509050600081600081518110611a3d57fe5b6020026020010151600001516001850310611a67576001611a618360018703612d4d565b01611a6a565b60005b90505b815181108015611a93575087828281518110611a8557fe5b602002602001015160000151105b15611b2d5760007f0000000000000000000000000000000000000000000000000000000000000000838381518110611ac757fe5b6020026020010151600001510390506000611ae28583612726565b90506000611af48a6020015184612726565b90508181868681518110611b0457fe5b6020026020010151602001510281611b1857fe5b04880397505050508080600101915050611a6d565b50505b82600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206002018190555085600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206003018190555050505050505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600501549050919050565b60058181548110611c2057fe5b90600052602060002090600202016000915090508060000154908060010154905082565b60038181548110611c5157fe5b90600052602060002090600202016000915090508060000154908060010154905082565b600c5481565b60115481565b60078181548110611c8e57fe5b906000526020600020016000915090505481565b60106020528060005260406000206000915090505481565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600401549050919050565b60003073ffffffffffffffffffffffffffffffffffffffff166201e86243846040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015611d7657600080fd5b505afa158015611d8a573d6000803e3d6000fd5b505050506040513d6020811015611da057600080fd5b81019080805190602001909291905050509050919050565b600a5481565b600b5481565b6000611e3b6003805480602002602001604051908101604052809291908181526020016000905b82821015611e3157838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190611deb565b5050505083612726565b9050919050565b60003073ffffffffffffffffffffffffffffffffffffffff1663ee677b3683436040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015611eb557600080fd5b505af1158015611ec9573d6000803e3d6000fd5b505050506040513d6020811015611edf57600080fd5b81019080805190602001909291905050509050919050565b611f013343611669565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541015611f5057600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825403925050819055506000600260016002805490500381548110611fb757fe5b90600052602060002090600202016001015490506000600360016003805490500381548110611fe257fe5b90600052602060002090600202016001015490506000818484028161200357fe5b04905061200e61326f565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060c00160405290816000820154815260200160018201805480602002602001604051908101604052809291908181526020016000905b828210156120cd57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190612087565b505050508152602001600282015481526020016003820154815260200160048201548152602001600582015481525050905060008082602001515111612114576000612139565b81602001516001836020015151038151811061212c57fe5b6020026020010151602001515b9050600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160405180604001604052804381526020018584018152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506002604051806040016040528043815260200185880181525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060036040518060400160405280438152602001888701815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050505050505050565b60016020528060005260406000206000915090508060000154908060020154908060030154908060040154908060050154905085565b600f6020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006123098383611669565b6123be600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101805480602002602001604051908101604052809291908181526020016000905b828210156123b45783829060005260206000209060020201604051806040016040529081600082015481526020016001820154815250508152602001906001019061236e565b5050505083612726565b905092915050565b600681815481106123d357fe5b90600052602060002090600202016000915090508060000154908060010154905082565b6124013343611669565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060020154600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015403101561249457600080fd5b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254039250508190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561257557600080fd5b505af1158015612589573d6000803e3d6000fd5b505050506040513d602081101561259f57600080fd5b8101908080519060200190929190505050505050565b81600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016000828254019250508190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8430856040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b1580156126b457600080fd5b505af11580156126c8573d6000803e3d6000fd5b505050506040513d60208110156126de57600080fd5b810190808051906020019092919050505050505050565b6004818154811061270257fe5b90600052602060002090600202016000915090508060000154908060010154905082565b6000808351141561273a576000905061281f565b8260018451038151811061274a57fe5b602002602001015160000151821061277f578260018451038151811061276c57fe5b602002602001015160200151905061281f565b8260008151811061278c57fe5b6020026020010151600001518210156127a8576000905061281f565b600080600185510390505b818111156128025760006002600184840101816127cc57fe5b049050848682815181106127dc57fe5b602002602001015160000151116127f5578092506127fc565b6001810391505b506127b3565b84828151811061280e57fe5b602002602001015160200151925050505b92915050565b612920816040516024018080602001828103825283818151815260200191508051906020019080838360005b8381101561286c578082015181840152602081019050612851565b50505050905090810190601f1680156128995780820380516001836020036101000a031916815260200191505b50925050506040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612de3565b50565b6129b981604051602401808281526020019150506040516020818303038152906040527ff5b1bba9000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050612de3565b50565b6129c4612e0c565b60007f000000000000000000000000000000000000000000000000000000000000000042816129ef57fe5b0490506000600360016003805490500381548110612a0957fe5b906000526020600020906002020160010154905060006305f5e1006034601154840281612a3257fe5b0481612a3a57fe5b0490506001600e600085815260200190815260200160002060006101000a81548160ff02191690831515021790555043601060008581526020019081526020016000208190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bbb30c5d306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612b0857600080fd5b505afa158015612b1c573d6000803e3d6000fd5b505050506040513d6020811015612b3257600080fd5b8101908080519060200190929190505050612b4f57505050612d4b565b6000811415612b6057505050612d4b565b80600f600085815260200190815260200160002081905550600360405180604001604052804381526020018385018152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550506004604051806040016040528043815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050600560405180604001604052807f0000000000000000000000000000000000000000000000000000000000000000430181526020018381525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1930836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015612d2f57600080fd5b505af1158015612d43573d6000803e3d6000fd5b505050505050505b565b600082600184510381518110612d5f57fe5b6020026020010151600001518210612d7d5760018351039050612ddd565b600080600185510390505b81811115612dd7576000600260018484010181612da157fe5b04905084868281518110612db157fe5b60200260200101516000015111612dca57809250612dd1565b6001810391505b50612d88565b81925050505b92915050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000600360016003805490500381548110612e2357fe5b906000526020600020906002020160010154905080600c541015612e5057600a5460118190555050612f45565b6000600c548210612e7557612e70600c5483612f4790919063ffffffff16565b612e8b565b612e8a82600c54612f4790919063ffffffff16565b5b90506000612eb8600c54612eaa60095485612f9190919063ffffffff16565b61301790919063ffffffff16565b90506000612ee5600854612ed7600d5485612f9190919063ffffffff16565b61301790919063ffffffff16565b9050612f24600954612f16612f056009548561306190919063ffffffff16565b601154612f9190919063ffffffff16565b61301790919063ffffffff16565b601181905550600b546011541115612f4057600b546011819055505b505050505b565b6000612f8983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506130e9565b905092915050565b600080831415612fa45760009050613011565b6000828402905082848281612fb557fe5b041461300c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806132c06021913960400191505060405180910390fd5b809150505b92915050565b600061305983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506131a9565b905092915050565b6000808284019050838110156130df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000838311158290613196576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561315b578082015181840152602081019050613140565b50505050905090810190601f1680156131885780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008083118290613255576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561321a5780820151818401526020810190506131ff565b50505050905090810190601f1680156132475780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161326157fe5b049050809150509392505050565b6040518060c001604052806000815260200160608152602001600081526020016000815260200160008152602001600081525090565b60405180604001604052806000815260200160008152509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220cdf60d0fa4b433743db5074b44744640dde6df09a2b764c0f91fc3770821abbd64736f6c634300060c0033";
