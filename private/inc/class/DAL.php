<?php

class DAL {

	public function __construct(){}

	private function dbconnect() {
		$conn = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD)
		or die ("<br/>Could not connect to MySQL server");

		mysql_select_db(DB_DB,$conn)
		or die ("<br/>Could not select the indicated database");

		return $conn;
	}
	
	public function get_experience_details(){
		$sql = "SELECT * FROM website.experience";
		return $this->query($sql);
	}
	
	public function get_portfolio_details(){
		$sql = "SELECT * FROM website.portfolio";
		return $this->query($sql);
	}
	
	private function query($sql){

		$this->dbconnect();

		$res = mysql_query($sql);

		if ($res){
			if (strpos($sql,'SELECT') === false){
				return true;
			}
		}
		else{
			if (strpos($sql,'SELECT') === false){
				return false;
			}
			else{
				return null;
			}
		}

		$results = array();

		while ($row = mysql_fetch_array($res)){

			$result = new DALQueryResult();

			foreach ($row as $k=>$v){
				$result->$k = $v;
			}

			$results[] = $result;
		}
		return $results;      
	}

}


class DALQueryResult {

	private $_results = array();

	public function __construct(){}

	public function __set($var,$val){
		$this->_results[$var] = $val;
	}

	public function __get($var){  
		if (isset($this->_results[$var])){
			return $this->_results[$var];
		}
		else{
			return null;
		}
	}
}
?>