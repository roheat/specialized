import React from "react";
import "./bike-details-spec.styles.scss";

export default function BikeDetailsSpec() {
  return (
    <div className="bike-details-spec">
      <div className="bike-details-spec-wrap">
        <div className="bike-details-spec-leftColumn">
          <div className="bike-details-spec-downloadManuals">
            <p className="bike-details-spec-manualsTitle">MANUAL DOWNLOADS</p>
            <div className="bike-details-spec-manualsw">
              <p className="bike-details-spec-manuals">
                Specialized Bike Owners Manual
              </p>
              <p className="bike-details-spec-manuals">
                DODATEK - POUŽITÍ TRENAŽÉRU
              </p>
              <p className="bike-details-spec-manuals">
                Specialized Bicycle Owner's Manual Addendum: Riding With Kids
              </p>
              <p className="bike-details-spec-manuals">
                Specialized Bicycle Owner's Manual (English)
              </p>
              <p className="bike-details-spec-manuals">
                Specialized Suspension Calculator
              </p>
              <p className="bike-details-spec-manuals">
                2019 Rider/Bike Weight Limits and Terrain Conditions
              </p>
              <p className="bike-details-spec-manuals">
                Specialized Ride App (Android)
              </p>
              <p className="bike-details-spec-manuals">
                Roval Road and Mountain Wheelsets
              </p>
            </div>
          </div>
        </div>
        <div className="bike-details-spec-rightColumn">
          <p className="bike-details-spec-title">TECHNICAL SPECIFICATIONS</p>

          <div className="bike-details-spec-tableHeaderRow">
            <p className="bike-details-spec-tableHeader">DRIVETRAIN</p>
          </div>
          <table className="bike-details-spec-Table">
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">BOTTOM BRACKET</td>
              <td className="item-spec-table-data">SRAM GXP</td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">CHAIN</td>
              <td className="item-spec-table-data">SRAM GX Eagle, 12-speed</td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">CRANKSET</td>
              <td className="item-spec-table-data">
                {" "}
                Truvativ Descendant, aluminum, Boost™ 148, 170mm crankarm, 24mm
                spindle
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">SHIFT LEVERS</td>
              <td className="item-spec-table-data">
                SRAM GX Eagle, trigger, 12-speed
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">CASSETTE</td>
              <td className="item-spec-table-data">
                SRAM GX Eagle, 12-speed, 10-50t
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">CHAINRINGS</td>
              <td className="item-spec-table-data"> Steel, 30T</td>
            </tr>
          </table>

          <div className="bike-details-spec-tableHeaderRow">
            <p className="bike-details-spec-tableHeader">SUSPENSION</p>
          </div>
          <table className="bike-details-spec-table">
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">FORK</td>
              <td className="item-spec-table-data">
                FOX FLOAT 36 Factory, GRIP2 damper, Kashima Coating, 15x110mm,
                51mm offset, 150mm of travel
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">REAR SHOCK</td>
              <td className="item-spec-table-data">
                FOX FLOAT DPX2 Factory, Rx Trail Tune, EVOL Air sleeve, Kashima
                coat, 3-position adjustment w/ Open Mode adjustment, 210x50mm
              </td>
            </tr>
          </table>

          <div className="bike-details-spec-tableHeaderRow">
            <p className="bike-details-spec-tableHeader">COCKPIT</p>
          </div>
          <table className="bike-details-spec-Table">
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">SADDLE</td>
              <td className="item-spec-table-data">
                Body Geometry Phenom Comp, hollow Cr-Mo rails, 143mm
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">SEAT BINDER</td>
              <td className="item-spec-table-data">
                {" "}
                Specialized bolt-type, alloy, 38.6mm
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">SEATPOST</td>
              <td className="item-spec-table-data">
                Command Post IRcc, 16-position micro-height adjustable, two-bolt
                head, bottom mount cable routing, remote SRL lever, 34.9mm, S:
                130mm, M/L/XL: 160mm of travel
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">HANDLEBARS</td>
              <td className="item-spec-table-data">
                Specialized Trail, 7050 alloy, 8-degree backsweep, 6-degree
                upsweep, 27mm rise, 780mm, 31.8mm clamp
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">STEM</td>
              <td className="item-spec-table-data">
                Specialized Trail, forged alloy, 4-bolt, 5mm rise
              </td>
            </tr>
          </table>

          <div className="bike-details-spec-tableHeaderRow">
            <p className="bike-details-spec-tableHeader">WHEELS & TIRES</p>
          </div>
          <table className="bike-details-spec-Table">
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">FRONT HUB</td>
              <td className="item-spec-table-data">
                {" "}
                Specialized, sealed cartridge bearings, 15x110mm spacing, 28h
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">REAR HUB</td>
              <td className="item-spec-table-data">
                {" "}
                DT Swiss 350, Star Ratchet, 36t engagement, SRAM XD driver body,
                12mm thru-axle, 148mm spacing, 28h
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">INNER TUBES</td>
              <td className="item-spec-table-data">Standard, Presta valve</td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">SPOKES</td>
              <td className="item-spec-table-data">DT Swiss Industry</td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">RIMS</td>
              <td className="item-spec-table-data">
                Roval Traverse Carbon 29, hookless carbon, 30mm inner width,
                hand-built 2Bliss Ready, 28h
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">FRONT TIRE</td>
              <td className="item-spec-table-data">
                Butcher, GRID casing, GRIPTON® compound, 2Bliss Ready, 29x2.6"
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">REAR TIRE</td>
              <td className="item-spec-table-data">
                Purgatory, GRID casing, GRIPTON® compound, 2Bliss ready, 29
                x2.6"
              </td>
            </tr>
          </table>

          <div className="bike-details-spec-tableHeaderRow">
            <p className="bike-details-spec-tableHeader">BRAKES</p>
          </div>
          <table className="bike-details-spec-Table">
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">FRONT BRAKE</td>
              <td className="item-spec-table-data">
                SRAM Guide RS, hydraulic disc, organic pads, Guide S4 4-piston
                caliper, 200mm rotor
              </td>
            </tr>
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">REAR BRAKE</td>
              <td className="item-spec-table-data">
                SRAM Guide RS, hydraulic disc, organic pads, Guide S4 4-piston
                caliper, 180mm rotor
              </td>
            </tr>
          </table>

          <div className="bike-details-spec-tableHeaderRow">
            <p className="bike-details-spec-tableHeader">ACCESSORIES</p>
          </div>
          <table className="bike-details-spec-Table">
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">PEDALS</td>
              <td className="item-spec-table-data">Specialized Dirt</td>
            </tr>
          </table>

          <div className="bike-details-spec-tableHeaderRow">
            <p className="bike-details-spec-tableHeader">FRAMESET</p>
          </div>
          <table className="bike-details-spec-Table">
            <tr className="bike-details-spec-tableRow">
              <td className="table-data-main">FRAME</td>
              <td className="item-spec-table-data">
                FACT 11m, full carbon chassis and rear-end, asymmetrical design,
                29 Trail Geometry, SWAT™ Door integration, threaded BB, fully
                enclosed internal cable routing, 12x148mm dropouts, sealed
                cartridge bearing pivots, replaceable derailleur{" "}
              </td>
            </tr>
          </table>

          <p className="bike-details-spec-disclaimer">
            * Specifications are subject to change without notice
          </p>
        </div>
      </div>
    </div>
  );
}
