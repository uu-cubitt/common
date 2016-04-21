import * as chai from "chai";
import {Guid} from "./../Guid";

let expect = chai.expect;

describe("GUID tests", () => {
	it("should accept a valid GUID", (done) => {
		expect(Guid.parse("65de22f0-132a-4d05-9c52-840f6e25255b")).to.not.be.null;
		done();
	});
	it("should not accept a shorter string", (done) => {
		expect(Guid.parse("65de22f0-132a-4d05-9c52-840f6e25255")).to.be.null;
		done();
	});
	it("should not accept an invalid GUID", (done) => {
		expect(Guid.parse("65de22f0-132a-5d05-9c52-840f6e25255b")).to.be.null;
		done();
	});
});