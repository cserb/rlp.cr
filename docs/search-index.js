crystal_doc_search_index_callback({"repository_name":"github.com/q9f/rlp.cr","body":"# rlp.cr\n\n[![Build Status](https://img.shields.io/github/workflow/status/q9f/rlp.cr/Nightly)](https://github.com/q9f/rlp.cr/actions)\n[![Documentation](https://img.shields.io/badge/docs-html-black)](https://q9f.github.io/rlp.cr/)\n[![Release](https://img.shields.io/github/v/release/q9f/rlp.cr?include_prereleases&color=black)](https://github.com/q9f/rlp.cr/releases/latest)\n[![Language](https://img.shields.io/github/languages/top/q9f/rlp.cr?color=black)](https://github.com/q9f/rlp.cr/search?l=crystal)\n[![License](https://img.shields.io/github/license/q9f/rlp.cr.svg?color=black)](LICENSE)\n\na native library implementing `rlp` purely for the crystal language. `rlp` is ethereum's recursive length prefix used to encode arbitray data structures.\n\nthis library allows for rlp-encoding of:\n* binary data (assumed encoded)\n* boolean values (true, false)\n* scalars (positive integers)\n* string literals and characters\n* arrays containing any of the the above\n* nested arrays containing any of the above\n\nthis library allows for decoding of:\n* rlp-encoded data in binary format\n* rlp-encoded data in hexadecimal string format\n\nnote, that decoded data is always binary as per ethereum's design rationale:\n\n> _\"RLP does not attempt to define any specific data types such as booleans, floats, doubles or even integers; instead, it simply exists to store structure, in the form of nested arrays, and leaves it up to the protocol to determine the meaning of the arrays\"_\n\n# installation\n\nadd the `rlp` library to your `shard.yml`\n\n```yaml\ndependencies:\n  rlp:\n    github: q9f/rlp.cr\n    version: \"~> 0.1\"\n```\n\n# usage\n\n```crystal\n# import rlp\nrequire \"rlp\"\n```\n\nthis library exposes the following modules (in logical order):\n\n* `Rlp`: core library exposing `encode` and `decode` logic\n* `Rlp::Util`: a collection of utilities to ease the conversion between data types\n* `Rlp::RecursiveArray`: is a data type alias allowing for arrays of unknown nesting depth\n\nbasic usage:\n\n```crystal\n# rlp-encode a string\nrlp = Rlp.encode(\"A cat with a short string.\")\n# => Bytes[154, 65, 32, 99, 97, 116, 32, 119, 105, 116, 104, 32, 97, 32, 115, 104, 111, 114, 116, 32, 115, 116, 114, 105, 110, 103, 46]\n\n# (optionally) get a hex representation of the rlp-encoded data\nhex = Rlp::Util.bin_to_hex rlp\n# => \"9a4120636174207769746820612073686f727420737472696e672e\"\n\n# decode the rlp data\nbin = Rlp.decode hex\n# => Bytes[65, 32, 99, 97, 116, 32, 119, 105, 116, 104, 32, 97, 32, 115, 104, 111, 114, 116, 32, 115, 116, 114, 105, 110, 103, 46]\n\n# we expect a string, so we can try to convert it here\nstr = Rlp::Util.bin_to_str bin\n# => \"A cat with a short string.\"\n```\n\n# documentation\n\ngenerate a local copy with:\n\n```\ncrystal docs\n```\n\n# testing\n\nthe library is entirely specified through tests in `./spec`; run:\n\n```bash\ncrystal spec --verbose\n```\n\n# contribute\n\ncreate a pull request, and make sure tests and linter passes.\n\nthis library with built with the help of the blog post by the mana team implementing [`rlp` in elixir](https://www.badykov.com/elixir/2018/05/06/rlp/) and coinmonks' [annotated version of the `rlp` specification](https://medium.com/coinmonks/data-structure-in-ethereum-episode-1-recursive-length-prefix-rlp-encoding-decoding-d1016832f919). ethereum classic's [`rlp` article](https://ethereumclassic.org/blog/2018-03-19-rlp/) allows for some sweet test cases.\n\nlicense: apache license v2.0\n\ncontributors: [**@q9f**](https://github.com/q9f/)\n","program":{"html_id":"github.com/q9f/rlp.cr/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/q9f/rlp.cr","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/q9f/rlp.cr/Rlp","path":"Rlp.html","kind":"module","full_name":"Rlp","name":"Rlp","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"util.cr","line_number":19,"url":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr"},{"filename":"rlp.cr","line_number":19,"url":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/rlp.cr"},{"filename":"version.cr","line_number":17,"url":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/version.cr"}],"repository_name":"github.com/q9f/rlp.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"EMPTY_ARRAY","name":"EMPTY_ARRAY","value":"Bytes[OFFSET_ARRAY]","doc":"An empty array is defined as `0xC0`.","summary":"<p>An empty array is defined as <code>0xC0</code>.</p>"},{"id":"EMPTY_STRING","name":"EMPTY_STRING","value":"Bytes[OFFSET_STRING]","doc":"An empty string is defined as `0x80`.","summary":"<p>An empty string is defined as <code>0x80</code>.</p>"},{"id":"LIMIT_LONG","name":"LIMIT_LONG","value":"(BigInt.new(256)) ** (BigInt.new(8))","doc":"The size limit of large data objects to be encoded is `256 ** 8`.","summary":"<p>The size limit of large data objects to be encoded is <code>256 ** 8</code>.</p>"},{"id":"LIMIT_SHORT","name":"LIMIT_SHORT","value":"56","doc":"The size limit of small data objects to be encoded is `56`.","summary":"<p>The size limit of small data objects to be encoded is <code>56</code>.</p>"},{"id":"OFFSET_ARRAY","name":"OFFSET_ARRAY","value":"192","doc":"The offset for array list encoding is `192`.","summary":"<p>The offset for array list encoding is <code>192</code>.</p>"},{"id":"OFFSET_STRING","name":"OFFSET_STRING","value":"128","doc":"The offset for string literal encoding is `128`.","summary":"<p>The offset for string literal encoding is <code>128</code>.</p>"},{"id":"VERSION","name":"VERSION","value":"\"0.1.2\"","doc":"The version of the `Rlp` module shard.","summary":"<p>The version of the <code><a href=\"Rlp.html\">Rlp</a></code> module shard.</p>"}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"The `Rlp` module implementing Ethereum's Recursive Length Prefix\nfor arbitrary data encoding and decoding.","summary":"<p>The <code><a href=\"Rlp.html\">Rlp</a></code> module implementing Ethereum's Recursive Length Prefix for arbitrary data encoding and decoding.</p>","class_methods":[{"id":"decode(rlp:Bytes)-class-method","html_id":"decode(rlp:Bytes)-class-method","name":"decode","doc":"decodes arbitrary data from a recursive length prefix blob.\nnote, that the returned data only restores the data structure.\nit's up to the protocol to determine the meaning of the data\nas defined in ethereum's design rationale.","summary":"<p>decodes arbitrary data from a recursive length prefix blob.</p>","abstract":false,"args":[{"name":"rlp","doc":null,"default_value":"","external_name":"rlp","restriction":"Bytes"}],"args_string":"(rlp : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/rlp.cr#L192","def":{"name":"decode","args":[{"name":"rlp","doc":null,"default_value":"","external_name":"rlp","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if rlp === EMPTY_STRING\n  return \"\"\nelse\n  if rlp === EMPTY_ARRAY\n    return [] of RecursiveArray\n  end\nend\nprefix = rlp.first\nlength = rlp.bytesize\nif prefix < OFFSET_STRING && (length === 1)\n  return rlp\nelse\n  if prefix < (OFFSET_STRING + LIMIT_SHORT)\n    offset = 1\n    return rlp[offset, length - offset]\n  else\n    if prefix < OFFSET_ARRAY\n      offset = (1 + prefix) - 183\n      return rlp[offset, length - offset]\n    else\n      result = [] of RecursiveArray\n      if prefix < (OFFSET_ARRAY + LIMIT_SHORT)\n        offset = 1\n        rlp = rlp[offset, length - offset]\n      else\n        offset = (1 + prefix) - 247\n        rlp = rlp[offset, length - offset]\n      end\n      while rlp.bytesize > 0\n        prefix = rlp.first\n        length = 0\n        if prefix < OFFSET_STRING\n          length = 1\n        else\n          if prefix < (OFFSET_STRING + LIMIT_SHORT)\n            length = (1 + prefix) - OFFSET_STRING\n          else\n            if prefix < OFFSET_ARRAY\n              header_size = prefix - 183\n              header = rlp[1, header_size]\n              length = (1 + header_size) + (Util.bin_to_int(header))\n            else\n              if prefix < (OFFSET_ARRAY + LIMIT_SHORT)\n                length = (1 + prefix) - OFFSET_ARRAY\n              else\n                header_size = prefix - 247\n                header = rlp[1, header_size]\n                length = (1 + header_size) + (Util.bin_to_int(header))\n              end\n            end\n          end\n        end\n        result << (decode(rlp[0, length]))\n        offset = length\n        length = rlp.size - length\n        rlp = rlp[offset, length]\n      end\n      return result\n    end\n  end\nend\n"}},{"id":"decode(hex:String)-class-method","html_id":"decode(hex:String)-class-method","name":"decode","doc":"decodes rlp data from hex-encoded strings","summary":"<p>decodes rlp data from hex-encoded strings</p>","abstract":false,"args":[{"name":"hex","doc":null,"default_value":"","external_name":"hex","restriction":"String"}],"args_string":"(hex : String)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/rlp.cr#L272","def":{"name":"decode","args":[{"name":"hex","doc":null,"default_value":"","external_name":"hex","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return decode(Util.hex_to_bin(hex))"}},{"id":"encode(b:Bytes)-class-method","html_id":"encode(b:Bytes)-class-method","name":"encode","doc":"rlp-encodes binary data","summary":"<p>rlp-encodes binary data</p>","abstract":false,"args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"args_string":"(b : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/rlp.cr#L42","def":{"name":"encode","args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if (b.bytesize === 1) && b.first < OFFSET_STRING\n  return b\nend\nif b.bytesize < LIMIT_SHORT\n  prefix = UInt8.new(b.bytesize + OFFSET_STRING)\n  p = Bytes[prefix]\n  return Util.binary_add(p, b)\nend\nif b.bytesize < LIMIT_LONG\n  data_size = b.bytesize\n  header = Util.int_to_bin(data_size)\n  prefix = UInt8.new(((header.bytesize + OFFSET_STRING) + LIMIT_SHORT) - 1)\n  p = Bytes[prefix]\n  header = Util.binary_add(p, header)\n  return Util.binary_add(header, b)\nelse\n  raise(\"invalid data provided (size out of range: #{b.bytesize})\")\nend\n"}},{"id":"encode(l:Array)-class-method","html_id":"encode(l:Array)-class-method","name":"encode","doc":"rlp-encodes lists data","summary":"<p>rlp-encodes lists data</p>","abstract":false,"args":[{"name":"l","doc":null,"default_value":"","external_name":"l","restriction":"Array"}],"args_string":"(l : Array)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/rlp.cr#L88","def":{"name":"encode","args":[{"name":"l","doc":null,"default_value":"","external_name":"l","restriction":"Array"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if l.empty?\n  return EMPTY_ARRAY\nend\nbody = Slice(UInt8).empty\nl.each do |a|\n  if body.size === 0\n    body = encode(a)\n  else\n    body = Util.binary_add(body, encode(a))\n  end\nend\nif body.bytesize < LIMIT_SHORT\n  prefix = UInt8.new(body.bytesize + OFFSET_ARRAY)\n  p = Bytes[prefix]\n  return Util.binary_add(p, body)\nend\nif body.bytesize < LIMIT_LONG\n  data_size = body.bytesize\n  header = Util.int_to_bin(data_size)\n  prefix = UInt8.new(((header.bytesize + OFFSET_ARRAY) + LIMIT_SHORT) - 1)\n  p = Bytes[prefix]\n  header = Util.binary_add(p, header)\n  return Util.binary_add(header, body)\nelse\n  raise(\"invalid list provided (size out of range: #{body.bytesize})\")\nend\n"}},{"id":"encode(s:String)-class-method","html_id":"encode(s:String)-class-method","name":"encode","doc":"rlp-encodes string data","summary":"<p>rlp-encodes string data</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/rlp.cr#L144","def":{"name":"encode","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if s.empty?\n  return EMPTY_STRING\nelse\n  if s.size < LIMIT_LONG\n    return encode(Util.str_to_bin(s))\n  else\n    raise(\"invalid string provided (size out of range: #{s.size})\")\n  end\nend"}},{"id":"encode(i:Int)-class-method","html_id":"encode(i:Int)-class-method","name":"encode","doc":"rlp-encodes scalar data","summary":"<p>rlp-encodes scalar data</p>","abstract":false,"args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"args_string":"(i : Int)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/rlp.cr#L157","def":{"name":"encode","args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if i === 0\n  return EMPTY_STRING\nelse\n  if i > 0 && i < LIMIT_LONG\n    return encode(Util.int_to_bin(i))\n  else\n    raise(\"invalid scalar provided (out of range: #{i})\")\n  end\nend"}},{"id":"encode(c:Char)-class-method","html_id":"encode(c:Char)-class-method","name":"encode","doc":"rlp-encodes characters","summary":"<p>rlp-encodes characters</p>","abstract":false,"args":[{"name":"c","doc":null,"default_value":"","external_name":"c","restriction":"Char"}],"args_string":"(c : Char)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/rlp.cr#L172","def":{"name":"encode","args":[{"name":"c","doc":null,"default_value":"","external_name":"c","restriction":"Char"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return encode(c.to_s)"}},{"id":"encode(o:Bool)-class-method","html_id":"encode(o:Bool)-class-method","name":"encode","doc":"rlp-encodes boolean data","summary":"<p>rlp-encodes boolean data</p>","abstract":false,"args":[{"name":"o","doc":null,"default_value":"","external_name":"o","restriction":"Bool"}],"args_string":"(o : Bool)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/rlp.cr#L178","def":{"name":"encode","args":[{"name":"o","doc":null,"default_value":"","external_name":"o","restriction":"Bool"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if o\n  return Bytes[1]\nelse\n  return EMPTY_STRING\nend"}}],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/q9f/rlp.cr/Rlp/RecursiveArray","path":"Rlp/RecursiveArray.html","kind":"alias","full_name":"Rlp::RecursiveArray","name":"RecursiveArray","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"rlp.cr","line_number":39,"url":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/rlp.cr"}],"repository_name":"github.com/q9f/rlp.cr","program":false,"enum":false,"alias":true,"aliased":"(Array(Rlp::RecursiveArray) | Slice(UInt8) | String)","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/q9f/rlp.cr/Rlp","kind":"module","full_name":"Rlp","name":"Rlp"},"doc":"An recursive array alias for arrays of unknown nesting depth.","summary":"<p>An recursive array alias for arrays of unknown nesting depth.</p>","class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[]},{"html_id":"github.com/q9f/rlp.cr/Rlp/Util","path":"Rlp/Util.html","kind":"module","full_name":"Rlp::Util","name":"Util","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"util.cr","line_number":19,"url":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr"}],"repository_name":"github.com/q9f/rlp.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/q9f/rlp.cr/Rlp","kind":"module","full_name":"Rlp","name":"Rlp"},"doc":"Exposes a set of utilities to ease the handling of different data types.","summary":"<p>Exposes a set of utilities to ease the handling of different data types.</p>","class_methods":[{"id":"bin_to_hex(b:Bytes)-class-method","html_id":"bin_to_hex(b:Bytes)-class-method","name":"bin_to_hex","doc":"Converts binary bytes to a hex-encoded string.\n\nParameters:\n* `b` (`Bytes`): the binary bytes data to convert.\n\n```\nRlp::Util.bin_to_hex Bytes[4, 200, 29])\n# => \"04c81d\"\n```","summary":"<p>Converts binary bytes to a hex-encoded string.</p>","abstract":false,"args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"args_string":"(b : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L71","def":{"name":"bin_to_hex","args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"h = b.hexstring\nif h.size.odd?\n  h = \"0#{h}\"\nend\nreturn h\n"}},{"id":"bin_to_int(b:Bytes)-class-method","html_id":"bin_to_int(b:Bytes)-class-method","name":"bin_to_int","doc":"Converts binary bytes to a big integer.\n\nParameters:\n* `b` (`Bytes`): the binary bytes data to convert.\n\n```\nRlp::Util.bin_to_int Bytes[15, 66, 64])\n# => 1000000\n```","summary":"<p>Converts binary bytes to a big integer.</p>","abstract":false,"args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"args_string":"(b : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L29","def":{"name":"bin_to_int","args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return BigInt.new(b.hexstring, 16)"}},{"id":"bin_to_int(s:String)-class-method","html_id":"bin_to_int(s:String)-class-method","name":"bin_to_int","doc":"Overloaded function `bin_to_int` with `String` to allow for conversion of\ndecoded `Rlp` objects that might be a string already.\n\nParameters:\n* `s` (`String`): the `Rlp` string data to convert.\n\n```\nRlp::Util.bin_to_int \"\"\n# => 128\n```\n\nNote, that the only `String` that `Rlp.decode` actually returns is `\"\"`.\n\nRaises if `s` actually contains a string. Should use `hex_to_int` instead.","summary":"<p>Overloaded function <code><a href=\"../Rlp/Util.html#bin_to_int(b:Bytes)-class-method\">.bin_to_int</a></code> with <code>String</code> to allow for conversion of decoded <code><a href=\"../Rlp.html\">Rlp</a></code> objects that might be a string already.</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L47","def":{"name":"bin_to_int","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if s.size === 0\n  return 128\nend\nraise(\"cannot convert string literals to numbers, did you mean `hex_to_int`?\")\n"}},{"id":"bin_to_int(a:Array)-class-method","html_id":"bin_to_int(a:Array)-class-method","name":"bin_to_int","doc":"Overloaded function `bin_to_int` with `Array` to allow for conversion of\ndecoded `Rlp` objects that might be an `RecursiveArray`.\n\nRaises in any case if `a` actually contains an array. Shouldn't be used\nif decoded `Rlp` data could contain nested data structures.","summary":"<p>Overloaded function <code><a href=\"../Rlp/Util.html#bin_to_int(b:Bytes)-class-method\">.bin_to_int</a></code> with <code>Array</code> to allow for conversion of decoded <code><a href=\"../Rlp.html\">Rlp</a></code> objects that might be an <code><a href=\"../Rlp/RecursiveArray.html\">RecursiveArray</a></code>.</p>","abstract":false,"args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":"Array"}],"args_string":"(a : Array)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L58","def":{"name":"bin_to_int","args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":"Array"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"raise(\"cannot convert array data to numbers, please unpack first\")"}},{"id":"bin_to_str(b:Bytes)-class-method","html_id":"bin_to_str(b:Bytes)-class-method","name":"bin_to_str","doc":"Converts binary bytes to a string literal.\n\nParameters:\n* `b` (`Bytes`): the binary bytes data to convert.\n\n```\nRlp::Util.bin_to_str Bytes[97, 98, 99])\n# => \"abc\"\n```","summary":"<p>Converts binary bytes to a string literal.</p>","abstract":false,"args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"args_string":"(b : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L86","def":{"name":"bin_to_str","args":[{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return String.new(b)"}},{"id":"bin_to_str(s:String)-class-method","html_id":"bin_to_str(s:String)-class-method","name":"bin_to_str","doc":"Overloaded function `bin_to_str` with `String` to allow for conversion of\ndecoded `Rlp` objects that might be a string already.\n\nParameters:\n* `s` (`String`): the `Rlp` string data to convert.\n\n```\nRlp::Util.bin_to_str \"\"\n# => \"\"\n```","summary":"<p>Overloaded function <code><a href=\"../Rlp/Util.html#bin_to_str(b:Bytes)-class-method\">.bin_to_str</a></code> with <code>String</code> to allow for conversion of decoded <code><a href=\"../Rlp.html\">Rlp</a></code> objects that might be a string already.</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L100","def":{"name":"bin_to_str","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return s"}},{"id":"bin_to_str(a:Array)-class-method","html_id":"bin_to_str(a:Array)-class-method","name":"bin_to_str","doc":"Overloaded function `bin_to_str` with `Array` to allow for conversion of\ndecoded `Rlp` objects that might be an `RecursiveArray`.\n\nRaises in any case if `a` actually contains an array. Shouldn't be used\nif decoded `Rlp` data could contain nested data structures.","summary":"<p>Overloaded function <code><a href=\"../Rlp/Util.html#bin_to_str(b:Bytes)-class-method\">.bin_to_str</a></code> with <code>Array</code> to allow for conversion of decoded <code><a href=\"../Rlp.html\">Rlp</a></code> objects that might be an <code><a href=\"../Rlp/RecursiveArray.html\">RecursiveArray</a></code>.</p>","abstract":false,"args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":"Array"}],"args_string":"(a : Array)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L109","def":{"name":"bin_to_str","args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":"Array"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"raise(\"cannot convert array data to string, please unpack first\")"}},{"id":"binary_add(a:Bytes,b:Bytes)-class-method","html_id":"binary_add(a:Bytes,b:Bytes)-class-method","name":"binary_add","doc":"concatenates two byte slices of uint8","summary":"<p>concatenates two byte slices of uint8</p>","abstract":false,"args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":"Bytes"},{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"args_string":"(a : Bytes, b : Bytes)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L212","def":{"name":"binary_add","args":[{"name":"a","doc":null,"default_value":"","external_name":"a","restriction":"Bytes"},{"name":"b","doc":null,"default_value":"","external_name":"b","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"c = IO::Memory.new(a.bytesize + b.bytesize)\na.each do |v|\n  c.write_bytes(UInt8.new(v))\nend\nb.each do |v|\n  c.write_bytes(UInt8.new(v))\nend\nreturn c.to_slice\n"}},{"id":"hex_to_bin(h:String)-class-method","html_id":"hex_to_bin(h:String)-class-method","name":"hex_to_bin","doc":"Converts hex-encoded strings to binary bytes data.\n\nParameters:\n* `h` (`String`): the hex-encoded string to convert.\n\n```\nRlp::Util.hex_to_bin \"04c81d\"\n# => Bytes[4, 200, 29]\n```","summary":"<p>Converts hex-encoded strings to binary bytes data.</p>","abstract":false,"args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"args_string":"(h : String)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L152","def":{"name":"hex_to_bin","args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if h.size.odd?\n  h = \"0#{h}\"\nend\nreturn h.hexbytes\n"}},{"id":"hex_to_int(h:String)-class-method","html_id":"hex_to_int(h:String)-class-method","name":"hex_to_int","doc":"Converts hex-encoded strings to big integers.\n\nParameters:\n* `h` (`String`): the hex-encoded string to convert.\n\n```\nRlp::Util.hex_to_int \"04c81d\"\n# => 313373\n```","summary":"<p>Converts hex-encoded strings to big integers.</p>","abstract":false,"args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"args_string":"(h : String)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L166","def":{"name":"hex_to_int","args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if h.size.odd?\n  h = \"0#{h}\"\nend\nreturn BigInt.new(h, 16)\n"}},{"id":"hex_to_str(h:String)-class-method","html_id":"hex_to_str(h:String)-class-method","name":"hex_to_str","doc":"Converts hex-encoded strings to string literals.\n\nParameters:\n* `h` (`String`): the hex-encoded string to convert.\n\n```\nRlp::Util.hex_to_str \"646f67\"\n# => \"dog\"\n```","summary":"<p>Converts hex-encoded strings to string literals.</p>","abstract":false,"args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"args_string":"(h : String)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L180","def":{"name":"hex_to_str","args":[{"name":"h","doc":null,"default_value":"","external_name":"h","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if h.size.odd?\n  h = \"0#{h}\"\nend\nreturn String.new(h.hexbytes)\n"}},{"id":"int_to_bin(i:Int)-class-method","html_id":"int_to_bin(i:Int)-class-method","name":"int_to_bin","doc":"Converts big integers to binary bytes.\n\nParameters:\n* `i` (`Int`): the big integer to convert.\n\n```\nRlp::Util.int_to_bin 1_000_000\n# => Bytes[15, 66, 64]\n```","summary":"<p>Converts big integers to binary bytes.</p>","abstract":false,"args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"args_string":"(i : Int)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L122","def":{"name":"int_to_bin","args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"h = i.to_s(16)\nif h.size.odd?\n  h = \"0#{h}\"\nend\nreturn h.hexbytes\n"}},{"id":"int_to_hex(i:Int)-class-method","html_id":"int_to_hex(i:Int)-class-method","name":"int_to_hex","doc":"Converts big integers to hex-encoded strings.\n\nParameters:\n* `i` (`Int`): the big integer to convert.\n\n```\nRlp::Util.int_to_hex 313_373\n# => \"04c81d\"\n```","summary":"<p>Converts big integers to hex-encoded strings.</p>","abstract":false,"args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"args_string":"(i : Int)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L137","def":{"name":"int_to_hex","args":[{"name":"i","doc":null,"default_value":"","external_name":"i","restriction":"Int"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"h = i.to_s(16)\nif h.size.odd?\n  h = \"0#{h}\"\nend\nreturn h\n"}},{"id":"str_to_bin(s:String)-class-method","html_id":"str_to_bin(s:String)-class-method","name":"str_to_bin","doc":"Converts string literals to binary bytes data.\n\nParameters:\n* `s` (`String`): the string literal to convert.\n\n```\nRlp::Util.str_to_bin \"abc\"\n# => Bytes[97, 98, 99]\n```","summary":"<p>Converts string literals to binary bytes data.</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L194","def":{"name":"str_to_bin","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return s.to_slice"}},{"id":"str_to_hex(s:String)-class-method","html_id":"str_to_hex(s:String)-class-method","name":"str_to_hex","doc":"Converts string literals to hex-encoded strings.\n\nParameters:\n* `s` (`String`): the string literal to convert.\n\n```\nRlp::Util.str_to_hex \"dog\"\n# => \"646f67\"\n```","summary":"<p>Converts string literals to hex-encoded strings.</p>","abstract":false,"args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"args_string":"(s : String)","source_link":"https://github.com/q9f/rlp.cr/blob/0d9c98420838f9aa651dc9ae331cad57d51d8b72/src/util.cr#L207","def":{"name":"str_to_hex","args":[{"name":"s","doc":null,"default_value":"","external_name":"s","restriction":"String"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"return s.to_slice.hexstring"}}],"constructors":[],"instance_methods":[],"macros":[],"types":[]}]}]}})